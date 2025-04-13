import { Module } from '@nestjs/common';
import { AiIntegrationService } from 'src/services/ai-integration/ai-integration.service';
import { AiWriterService } from 'src/services/ai-writer/ai-writer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AiWriterService, AiIntegrationService],
  exports: [AiWriterService, AiIntegrationService],
})
export class AiWriterModule {}
