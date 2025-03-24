import { Test, TestingModule } from '@nestjs/testing';
import { AiWriterService } from './ai-writer.service';

describe('AiWriterService', () => {
  let service: AiWriterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiWriterService],
    }).compile();

    service = module.get<AiWriterService>(AiWriterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
