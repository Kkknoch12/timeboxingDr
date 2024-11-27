// create-task.dto.ts
import { Priority } from '@prisma/client';

export class CreateTaskDto {
  title: string;
  description: string;
  priority: Priority; 
  status?: number;
  userId: number;
}


export class UpdateTaskDto {
  title?: string;
  description?: string;
  priority?: Priority; 
  status?: number;
}
