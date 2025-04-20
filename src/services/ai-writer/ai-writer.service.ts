import { Injectable } from '@nestjs/common';
import { AiIntegrationService } from '../ai-integration/ai-integration.service';
import { jsonPrompt, mdxJsonPrompt, systemPrompt } from 'src/utils/prompts';
import {
  BlogType,
  BlogContext,
  BlogGenerateRequest,
} from 'src/utils/types/blog-types';
import { BaseBlogResponseDto, BlogResponseFactory } from 'src/utils/dto';

@Injectable()
export class AiWriterService {
  constructor(private readonly aiIntegration: AiIntegrationService) {}

  async apiBlogGenerate(
    body: BlogGenerateRequest,
  ): Promise<BaseBlogResponseDto> {
    const selectedPrompt = await selectPrompt(body.type, body.context);

    const rawResponse = await this.aiIntegration.generateContent<
      Record<string, unknown>
    >(selectedPrompt, systemPrompt, { responseFormat: 'json_object' });

    return BlogResponseFactory.createFromType(body.type, rawResponse);
  }
}

const selectPrompt = (apiBlogType: BlogType, promptContext: BlogContext) => {
  switch (apiBlogType) {
    case BlogType.JSON:
      return jsonPrompt(promptContext);
    case BlogType.MARKDOWN:
      return mdxJsonPrompt(promptContext);
    default:
      return jsonPrompt(promptContext);
  }
};
