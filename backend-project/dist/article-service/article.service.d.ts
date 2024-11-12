import { DatabaseService } from '../database-config/database.service';
export declare class ArticleService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getAllArticles(): Promise<any>;
    getById(id_article: number): Promise<any>;
    newArticle(nom: string, quantite: number): Promise<any>;
    updateArticle(nom: string, quantite: number, id_article: number): Promise<any>;
    deleteArticle(id_article: number): Promise<any>;
}
