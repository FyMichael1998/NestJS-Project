"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database-config/database.service");
const user_model_1 = require("./user.model");
let UserService = class UserService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.currentUser = null;
    }
    setUser(user) {
        this.currentUser = user;
    }
    getUser() {
        return this.currentUser;
    }
    async getAllUsers() {
        const query = 'SELECT * FROM utilisateur';
        return this.databaseService.executeQuery(query);
    }
    verifySpecialCharacter(mdp) {
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        return specialCharPattern.test(mdp);
    }
    verifyUppercaseCharacter(mdp) {
        const uppercasePattern = /[A-Z]/;
        return uppercasePattern.test(mdp);
    }
    verifyCharacterLength(mdp) {
        return mdp.length >= 8;
    }
    verifyPasswordConstraints(mdp) {
        return this.verifyCharacterLength(mdp) && this.verifyUppercaseCharacter(mdp) && this.verifySpecialCharacter(mdp);
    }
    async exist(email, mdp) {
        const query = 'SELECT * FROM utilisateur WHERE email = ? AND mdp = ?';
        const result = await this.databaseService.executeQuery(query, [email, mdp]);
        return result.length > 0;
    }
    async newUser(email, mdp) {
        const query = 'INSERT INTO utilisateur (email, mdp) VALUES (?, ?)';
        const result = await this.databaseService.executeQuery(query, [email, mdp]);
        if (result) {
            const queryFindUser = 'SELECT * FROM utilisateur order by id_utilisateur';
            const insertedUserData = await this.databaseService.executeQuery(queryFindUser, [email]);
            const newUser = new user_model_1.User(insertedUserData[0].id_utilisateur, insertedUserData[0].email, insertedUserData[0].mdp);
            return newUser;
        }
        throw new Error("Erreur lors de l'insertion de l'utilisateur");
    }
    async checkAuthentification(email, mdp) {
        if (!email || email.trim() === "") {
            throw new Error("Email non valide ou null");
        }
        if (!mdp || mdp.trim() === "") {
            throw new Error("Mot de passe invalide ou null");
        }
        const userExists = await this.exist(email, mdp);
        if (!userExists) {
            this.newUser(email, mdp);
            const query = 'SELECT * FROM utilisateur WHERE email = ? AND mdp = ?';
            const result = await this.databaseService.executeQuery(query, [email, mdp]);
            this.setUser(result[0]);
            return this.getUser();
        }
        else {
            const query = 'SELECT * FROM utilisateur WHERE email = ? AND mdp = ?';
            const result = await this.databaseService.executeQuery(query, [email, mdp]);
            this.setUser(result[0]);
            return this.getUser();
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map