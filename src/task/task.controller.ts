import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from 'src/task/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  toggleDone(@Param('id') id: string) {
    return this.taskService.toggleDone(id);
  }
}
