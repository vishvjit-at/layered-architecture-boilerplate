"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserUseCase = void 0;
const userEntity_1 = require("../entities/userEntity");
class createUserUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(aParams) {
        try {
            const params = new userEntity_1.userEntity(aParams.firstName, aParams.lastName, aParams.password);
            const data = await this.repo.createUser(params);
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error("error");
        }
    }
}
exports.createUserUseCase = createUserUseCase;
//# sourceMappingURL=createUser.js.map