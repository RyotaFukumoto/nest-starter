import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

// nest generate service tasks で生成されたテストファイル
describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
