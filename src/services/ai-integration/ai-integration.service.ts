import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

export interface OpenAIResponseOptions {
  model?: string;
  temperature?: number;
  responseFormat?: 'text' | 'json_object';
}

@Injectable()
export class AiIntegrationService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async generateContent<T = Record<string, unknown>>(
    prompt: string,
    systemPrompt: string,
    options: OpenAIResponseOptions = {},
  ): Promise<T> {
    if (!prompt) {
      throw new Error('Prompt cannot be empty');
    }

    const {
      model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      temperature = 0.58,
      responseFormat = 'json_object',
    } = options;

    try {
      const completion = await this.openai.chat.completions.create({
        model,
        temperature,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        response_format: { type: responseFormat },
      });

      if (!completion.choices[0]?.message?.content) {
        throw new Error('No response from OpenAI');
      }

      if (responseFormat === 'json_object') {
        return JSON.parse(completion.choices[0].message.content) as T;
      }

      return completion.choices[0].message.content as unknown as T;
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new Error('Error during AI content generation.');
    }
  }
}
