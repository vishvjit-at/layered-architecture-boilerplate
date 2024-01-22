"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const userEntity_1 = require("../../../domain/entities/userEntity");
class userMapper {
    static toDomain(raw) {
        const data = [];
        raw.forEach((user) => {
            const userDetails = new userEntity_1.userEntity(user.dataValues.firstName, user.dataValues.lastName, user.dataValues.id);
            data.push(userDetails);
        });
        return data;
    }
    static toPersist(raw) {
        const name = `${raw.getFirstName()} ${raw.getLastName()}`;
        const id = raw.getId();
        return { name, id };
    }
}
exports.userMapper = userMapper;
//# sourceMappingURL=userMapper.js.map