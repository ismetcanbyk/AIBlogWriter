import { Module } from '@nestjs/common';
import { BlogEvaluationService } from '../../services/blog-evaluation/blog-evaluation.service';
import { BlogEvaluationController } from '../../controllers/blog-evaluation/blog-evaluation.controller';
import { AiIntegrationService } from '../../services/ai-integration/ai-integration.service';

@Module({
  providers: [BlogEvaluationService, AiIntegrationService],
  controllers: [BlogEvaluationController],
  exports: [BlogEvaluationService],
})
export class BlogEvaluationModule {}
