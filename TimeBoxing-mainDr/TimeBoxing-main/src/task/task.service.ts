import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Priority } from '@prisma/client'; 

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,         
        description: createTaskDto.description, 
        priority: createTaskDto.priority,   
        status: createTaskDto.status ?? 0,  
        User_Id: createTaskDto.userId,      
      },
    });
  }

  
  findAll() {
    return this.prisma.task.findMany();
  }

  
  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: {
        title: updateTaskDto.title,
        description: updateTaskDto.description,
        priority: updateTaskDto.priority,  
        status: updateTaskDto.status ?? 0,
      },
    });
  }

  
  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
