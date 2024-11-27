import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
