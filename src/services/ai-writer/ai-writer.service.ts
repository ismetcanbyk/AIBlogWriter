import { Injectable } from '@nestjs/common';
import {
  htmlPrompt,
  jsonPrompt,
  mdxJsonPrompt,
  mdxPrompt,
  systemPrompt,
} from 'src/utils/prompts';
import {
  BlogType,
  type BlogContext,
  type BlogGenerateRequest,
} from 'src/utils/types/blog-types';
import { AiIntegrationService } from '../ai-integration/ai-integration.service';

@Injectable()
export class AiWriterService {
  constructor(private readonly aiIntegration: AiIntegrationService) {}

  async apiBlogGenerate(body: BlogGenerateRequest): Promise<any> {
    const selectedPrompt = await selectPrompt(body.type, body.context);

    const blog = await this.aiIntegration.generateText(
      selectedPrompt,
      systemPrompt,
    );

    return blog;
  }
}

const selectPrompt = (apiBlogType: BlogType, promptContext: BlogContext) => {
  switch (apiBlogType) {
    case BlogType.JSON:
      return jsonPrompt(promptContext);

    case BlogType.HTML:
      return htmlPrompt(promptContext);

    case BlogType.MARKDOWN:
      return mdxPrompt(promptContext);

    case BlogType.MARKDOWN_JSON:
      return mdxJsonPrompt(promptContext);

    default:
      return jsonPrompt(promptContext);
  }
};
