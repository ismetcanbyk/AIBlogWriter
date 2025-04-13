import { Body, Controller, Post } from '@nestjs/common';
import { AiWriterService } from 'src/services/ai-writer/ai-writer.service';
import { BlogType, type BlogGenerateRequest } from 'src/utils/types/blog-types';

@Controller('ai-writer')
export class AiWriterController {
  constructor(private readonly aiWriterService: AiWriterService) {}

  @Post('generate-blog')
  async generateBlogPost(@Body() body: BlogGenerateRequest) {
    if (!body.type || !body.context) {
      throw new Error('Missing required parameters: type and context');
    }

    const blog = await this.aiWriterService.apiBlogGenerate({
      type: body.type,
      context: {
        title: body.context.title,
        language: body.context.language,
        keys: body.context.keys,
        seo: body.context.seo,
      },
    });

    return blog;
  }
}
