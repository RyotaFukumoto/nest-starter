import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
// nest generate controller tasks で生成された
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  getAllTasks() {
    return '全てのタスクを返します';
  }

  @Post()
  createTask(@Body() body: any) {
    const task = this.taskService.createTask(body);
    return { message: 'タスクを作成しました', task };
  }
}
