import { Module } from '@nestjs/common';
import { AiIntegrationService } from 'src/services/ai-integration/ai-integration.service';
import { AiWriterService } from 'src/services/ai-writer/ai-writer.service';
import { BlogEvaluationModule } from '../blog-evaluation/blog-evaluation.module';
import { BlogEvaluationService } from 'src/services/blog-evaluation/blog-evaluation.service';

@Module({
  imports: [BlogEvaluationModule],
  controllers: [],
  providers: [AiWriterService, AiIntegrationService, BlogEvaluationService],
  exports: [AiWriterService, AiIntegrationService],
})
export class AiWriterModule {}
