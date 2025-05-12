import { Injectable } from '@nestjs/common';
import { AiIntegrationService } from '../ai-integration/ai-integration.service';
import {
  BLOG_EVALUATION_SYSTEM_PROMPT,
  createBlogEvaluationPrompt,
} from '../../utils/prompts/blog-evaluation.prompts';

export interface BlogEvaluationResult {
  readability: number;
  seoScore: number;
  contentQuality: number;
  engagement: number;
  suggestions: string[];
}

@Injectable()
export class BlogEvaluationService {
  constructor(private readonly aiIntegrationService: AiIntegrationService) {}

  async evaluateBlog(blogContent: string): Promise<BlogEvaluationResult> {
    return this.aiIntegrationService.generateContent<BlogEvaluationResult>(
      createBlogEvaluationPrompt(blogContent),
      BLOG_EVALUATION_SYSTEM_PROMPT,
      {
        model: 'gpt-3.5-turbo',
        temperature: 0.3,
        responseFormat: 'json_object',
      },
    );
  }
}
