"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("training", "admin", "admin", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});
exports.sequelize = sequelize;
//# sourceMappingURL=sequalizerConnection.js.map