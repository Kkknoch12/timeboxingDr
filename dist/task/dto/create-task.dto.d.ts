import { Priority } from '@prisma/client';
export declare class CreateTaskDto {
    title: string;
    description: string;
    priority: Priority;
    status?: number;
    userId: number;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    priority?: Priority;
    status?: number;
}
