import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}
  @Get()
  async getTasks() {
    return await this.taskServices.findAll();
  }

  @Get(':id')
  async getOneTask(@Param('id') id: string) {
    const task = await this.taskServices.findOne(id);
    if (!task) throw new NotFoundException('Task does not exist');
    return task;
  }

  @Post()
  async createTask(@Body() task: CreateTaskDto) {
    try {
      return await this.taskServices.create(task);
    } catch (error) {
      if (error.code === 11000)
        throw new ConflictException('Task already exists');
      throw error;
    }
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    const taskFound = await this.taskServices.findOne(id);
    if (!taskFound) throw new NotFoundException('Task does not exist');
    return await this.taskServices.update(id, task);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: string) {
    const taskFound = await this.taskServices.findOne(id);
    if (!taskFound) throw new NotFoundException('Task does not exist');
    return this.taskServices.delete(id);
  }
}
