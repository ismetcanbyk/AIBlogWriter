import { Module } from '@nestjs/common';

import { AiWriterController } from './controllers/ai-writer/ai-writer.controller';
import { AiWriterModule } from './modules/ai-writer/ai-writer.module';
import { AiIntegrationService } from './services/ai-integration/ai-integration.service';

@Module({
  imports: [AiWriterModule],
  controllers: [AiWriterController],
  providers: [AiIntegrationService],
})
export class AppModule {}
