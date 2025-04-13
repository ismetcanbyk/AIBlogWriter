import { Module } from '@nestjs/common';
import { PromptService } from './services/prompt/prompt.service';
import { AiWriterController } from './controllers/ai-writer/ai-writer.controller';
import { AiWriterModule } from './modules/ai-writer/ai-writer.module';
import { AiWriterService } from './services/ai-writer/ai-writer.service';
import { AiIntegrationService } from './services/ai-integration/ai-integration.service';

@Module({
  imports: [AiWriterModule],
  controllers: [AiWriterController],
  providers: [PromptService],
})
export class AppModule {}
