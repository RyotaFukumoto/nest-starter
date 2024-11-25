import { Body, Controller, Get, Post } from '@nestjs/common';
// nest generate controller tasks で生成された
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return '全てのタスクを返します';
  }

  @Post()
  createTask(@Body() body: any) {
    return `タスクを作成しました: ${JSON.stringify(body)}`;
  }
}
