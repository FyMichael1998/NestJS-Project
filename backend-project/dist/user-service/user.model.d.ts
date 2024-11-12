export declare class User {
    private _id_utilisateur;
    private _email;
    private _mdp;
    constructor(id_utilisateur: number, email: string, mdp: string);
    get id_utilisateur(): number;
    set id_utilisateur(value: number);
    get email(): string;
    set email(value: string);
    get mdp(): string;
    set mdp(value: string);
}
