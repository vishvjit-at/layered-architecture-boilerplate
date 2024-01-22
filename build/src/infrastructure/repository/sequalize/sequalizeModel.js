"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSequelize = void 0;
const sequalizerConnection_1 = require("./sequalizerConnection");
const sequelize_1 = require("sequelize");
class userSequelize extends sequelize_1.Model {
}
exports.userSequelize = userSequelize;
userSequelize.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { tableName: "userAdmin", sequelize: sequalizerConnection_1.sequelize, timestamps: false });
//# sourceMappingURL=sequalizeModel.js.map