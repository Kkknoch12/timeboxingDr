import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
