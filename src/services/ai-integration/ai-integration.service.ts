import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

interface BlogResponse {
  title?: string;
  content?: string;
  description?: string;
  category?: string;
}

@Injectable()
export class AiIntegrationService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async generateText(
    prompt: string,
    systemPropmt: string,
  ): Promise<BlogResponse> {
    if (!prompt) {
      throw new Error('Prompt cannot be empty');
    }

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        temperature: 0.58,
        messages: [
          { role: 'system', content: systemPropmt },
          { role: 'user', content: prompt },
        ],
      });

      return completion.choices[0]?.message?.content
        ? JSON.parse(completion.choices[0].message.content)
        : {};
    } catch (error) {
      console.error('OpenAI Error:', error);
      throw new Error('Error during AI text generation.');
    }
  }
}
