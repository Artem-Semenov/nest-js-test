import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/task/task.dto';

@Injectable()
export class TaskService {
  private TASKS = [
    {
      id: 1,
      name: 'recordVideo',
      isDone: false,
    },
  ];

  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length,
      ...dto,
      isDone: false,
    });
    return this.TASKS;
  }

  toggleDone(id: string) {
    const task = this.TASKS.find((el) => el.id === +id);
    if (!task) return `There is no task with id ${id}`;
    task.isDone = !task.isDone;
    return task;
  }
}
