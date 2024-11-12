"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const mysql = require("mysql2/promise");
let DatabaseService = class DatabaseService {
    async onModuleInit() {
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'project',
            port: 3307,
        });
    }
    async onModuleDestroy() {
        if (this.connection) {
            await this.connection.end();
        }
        else {
            console.log('Fermeture de la connexion impossible');
        }
    }
    getConnection() {
        if (!this.connection) {
            throw new Error('Database connection not initialized');
        }
        return this.connection;
    }
    async executeQuery(query, params) {
        const connex = this.getConnection();
        try {
            const [results] = await connex.execute(query, params);
            return results;
        }
        catch (error) {
            throw new Error(`${error.message}`);
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map