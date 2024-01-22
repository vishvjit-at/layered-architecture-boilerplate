"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdUseCase = void 0;
class getUserByIdUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        try {
            const data = await this.repo.getUserById(id);
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error("error:user not found");
        }
    }
}
exports.getUserByIdUseCase = getUserByIdUseCase;
//# sourceMappingURL=getUserById.js.map