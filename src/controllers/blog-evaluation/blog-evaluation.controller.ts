import { Controller, Post, Body } from '@nestjs/common';
import { BlogEvaluationService } from '../../services/blog-evaluation/blog-evaluation.service';

@Controller('blog-evaluation')
export class BlogEvaluationController {
  constructor(private readonly blogEvaluationService: BlogEvaluationService) {}

  @Post('evaluate')
  async evaluateBlog(@Body('content') content: string) {
    return this.blogEvaluationService.evaluateBlog(content);
  }
}
