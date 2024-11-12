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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database-config/database.service");
let ArticleService = class ArticleService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getAllArticles() {
        const query = 'SELECT * FROM articles';
        return this.databaseService.executeQuery(query);
    }
    async getById(id_article) {
        const query = 'SELECT * FROM articles WHERE id_article = ?';
        return this.databaseService.executeQuery(query, [id_article]);
    }
    async newArticle(nom, quantite) {
        const query = 'INSERT INTO articles (nom_article, quantity) VALUES (?, ?)';
        return this.databaseService.executeQuery(query, [nom, quantite]);
    }
    async updateArticle(nom, quantite, id_article) {
        const query = 'update articles set nom_article = ?, quantity = ? where id_article = ?';
        return this.databaseService.executeQuery(query, [nom, quantite, id_article]);
    }
    async deleteArticle(id_article) {
        const query = 'delete from articles where id_article = ?';
        return this.databaseService.executeQuery(query, [id_article]);
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ArticleService);
//# sourceMappingURL=article.service.js.map