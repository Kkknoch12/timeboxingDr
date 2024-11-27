import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        start_time: string;
        end_time: string;
        status: number;
    }[]>;
}
