import { Injectable } from '@nestjs/common';
// nest generate service tasks で生成された
@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  createTask(task: any) {
    this.tasks.push(task);
    return task;
  }
}
