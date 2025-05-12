import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiWriterController } from './controllers/ai-writer/ai-writer.controller';
import { AiWriterModule } from './modules/ai-writer/ai-writer.module';
import { AiIntegrationService } from './services/ai-integration/ai-integration.service';
import { BlogEvaluationModule } from './modules/blog-evaluation/blog-evaluation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BlogEvaluationModule,
    AiWriterModule,
  ],
  controllers: [AiWriterController],
  providers: [AiIntegrationService],
})
export class AppModule {}
