import { ArticleService } from './article.service';
export declare class ArticleController {
    private readonly article;
    constructor(article: ArticleService);
    getAllArticles(): Promise<any>;
    getArticleById(id: number): Promise<any>;
    newArticle(body: {
        nom: string;
        quantite: number;
    }): Promise<any>;
    updateArticle(body: {
        nom: string;
        quantite: number;
        id_article: number;
    }): Promise<any>;
    deleteArticle(body: {
        id_article: number;
    }): Promise<any>;
}
