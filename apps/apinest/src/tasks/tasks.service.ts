import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto, UpdateTaskDto } from '../dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  findAll() {
    return this.taskModel.find({});
  }

  findOne(id: string) {
    return this.taskModel.findById(id);
  }

  create(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

  delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
