import { UserService } from './user.service';
export declare class UserController {
    private readonly user;
    constructor(user: UserService);
    check_auth(body: {
        email: string;
        mdp: string;
    }): Promise<import("./user.model").User>;
}
