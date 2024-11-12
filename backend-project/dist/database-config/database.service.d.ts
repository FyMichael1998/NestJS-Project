import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private connection;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getConnection(): mysql.Connection;
    executeQuery(query: string, params?: any[]): Promise<any>;
}
