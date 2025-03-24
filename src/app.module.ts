import { Module } from '@nestjs/common';
import { PromptService } from './services/prompt/prompt.service';
import { AiWriterController } from './controllers/ai-writer/ai-writer.controller';
import { AiWriterModule } from './modules/ai-writer/ai-writer.module';
import { AiWriterService } from './services/ai-writer/ai-writer.service';

@Module({
  imports: [AiWriterModule],
  controllers: [AiWriterController],
  providers: [AiWriterService, PromptService],
})
export class AppModule {}
