"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDbImplementation = void 0;
const userMapper_1 = require("../mappers/userMapper");
const sequalizeModel_1 = require("../sequalize/sequalizeModel");
class UserDbImplementation {
    async getUserById(id) {
        const data = await sequalizeModel_1.userSequelize.findByPk(id);
        if (!data) {
            return;
        }
        const data2 = userMapper_1.userMapper.toDomain([data]);
        return data2[0];
    }
    async createUser(user) {
        const insertedData = await sequalizeModel_1.userSequelize.create({
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            password: user.getPassword(),
        });
        return insertedData.dataValues.id;
    }
    async getUsers() {
        const data = await sequalizeModel_1.userSequelize.findAll();
        return userMapper_1.userMapper.toDomain(data);
    }
}
exports.UserDbImplementation = UserDbImplementation;
//# sourceMappingURL=userRepo.js.map