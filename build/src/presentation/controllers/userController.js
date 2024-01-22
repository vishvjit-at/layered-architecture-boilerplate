"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userGateway_1 = require("../../gateways/userGateway");
class UserController {
    async createUser(req, res) {
        try {
            const firstName = req.query.firstName;
            const lastName = req.query.lastName;
            const password = req.query.password;
            const data = {
                firstName,
                lastName,
                password,
            };
            const userId = new userGateway_1.UserGateWay().createUser(data);
            res.json({ userId });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = new userGateway_1.UserGateWay().getAllUsers();
            res.json(users);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const users = new userGateway_1.UserGateWay().getUserById(id);
            res.json(users);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map