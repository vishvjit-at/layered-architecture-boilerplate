"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGateWay = void 0;
const userRepo_1 = require("../infrastructure/repository/mysql/userRepo");
const createUser_1 = require("../domain/useCases/createUser");
const getAllUser_1 = require("../domain/useCases/getAllUser");
const getUserById_1 = require("../domain/useCases/getUserById");
class UserGateWay {
    constructor() {
        this.userRepo = new userRepo_1.UserDbImplementation();
    }
    createUser(user) {
        const createUser = new createUser_1.createUserUseCase(this.userRepo);
        return createUser.execute(user);
    }
    getAllUsers() {
        const getAllUser = new getAllUser_1.getAllUserUseCase(this.userRepo);
        return getAllUser.execute();
    }
    getUserById(id) {
        const getUserById = new getUserById_1.getUserByIdUseCase(this.userRepo);
        return getUserById.execute(id);
    }
}
exports.UserGateWay = UserGateWay;
//# sourceMappingURL=userGateway.js.map