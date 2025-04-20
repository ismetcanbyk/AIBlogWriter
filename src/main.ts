import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';
import validationOptions from './utils/config/validation-options';

dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe(validationOptions));

  app.setGlobalPrefix('/api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  try {
    await app.listen(PORT);
    Logger.log(`🚀 Server is running on http://localhost:${PORT}`, 'Bootstrap');
  } catch (error) {
    Logger.error('❌ Error starting server:', error, 'Bootstrap');
    process.exit(1);
  }
}

bootstrap();
