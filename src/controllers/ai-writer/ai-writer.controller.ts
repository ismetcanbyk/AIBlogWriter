import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AiWriterService } from 'src/services/ai-writer/ai-writer.service';
import { BaseBlogResponseDto } from 'src/utils/dto';
import { BlogGenerateRequestDto } from 'src/utils/dto/blog-generate-request.dto';

@Controller('ai-writer')
export class AiWriterController {
  constructor(private readonly aiWriterService: AiWriterService) {}

  @Post('generate-blog')
  @UsePipes(new ValidationPipe({ transform: true }))
  async generateBlogPost(
    @Body() requestDto: BlogGenerateRequestDto,
  ): Promise<BaseBlogResponseDto> {
    return await this.aiWriterService.apiBlogGenerate(requestDto);
  }
}
