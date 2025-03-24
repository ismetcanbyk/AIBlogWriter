import { Test, TestingModule } from '@nestjs/testing';
import { AiWriterController } from './ai-writer.controller';

describe('AiWriterController', () => {
  let controller: AiWriterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiWriterController],
    }).compile();

    controller = module.get<AiWriterController>(AiWriterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
