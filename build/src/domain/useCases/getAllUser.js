"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserUseCase = void 0;
class getAllUserUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute() {
        try {
            const data = await this.repo.getUsers();
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error("error:users not found");
        }
    }
}
exports.getAllUserUseCase = getAllUserUseCase;
//# sourceMappingURL=getAllUser.js.map