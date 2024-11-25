import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
// nest generate module tasks で生成された
@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
