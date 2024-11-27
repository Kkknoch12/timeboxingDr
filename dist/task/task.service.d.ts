import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        status: number;
        title: string;
        description: string;
        priority: import(".prisma/client").$Enums.Priority;
        User_Id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
