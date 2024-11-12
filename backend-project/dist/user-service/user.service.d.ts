import { DatabaseService } from '../database-config/database.service';
import { User } from './user.model';
export declare class UserService {
    private readonly databaseService;
    private currentUser;
    constructor(databaseService: DatabaseService);
    setUser(user: User): void;
    getUser(): User;
    getAllUsers(): Promise<any>;
    verifySpecialCharacter(mdp: string): boolean;
    verifyUppercaseCharacter(mdp: string): boolean;
    verifyCharacterLength(mdp: string): boolean;
    verifyPasswordConstraints(mdp: string): boolean;
    exist(email: string, mdp: string): Promise<boolean>;
    newUser(email: string, mdp: string): Promise<User>;
    checkAuthentification(email: string, mdp: string): Promise<User>;
}
