"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id_utilisateur, email, mdp) {
        this._id_utilisateur = id_utilisateur;
        this._email = email;
        this._mdp = mdp;
    }
    get id_utilisateur() {
        return this._id_utilisateur;
    }
    set id_utilisateur(value) {
        this._id_utilisateur = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get mdp() {
        return this._mdp;
    }
    set mdp(value) {
        this._mdp = value;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map