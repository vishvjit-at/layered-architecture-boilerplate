"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const Router = express_1.default.Router();
exports.Router = Router;
const IUserController = new userController_1.UserController();
Router.get("/create", (req, res) => IUserController.createUser(req, res));
Router.get("/all", (req, res) => IUserController.getAllUsers(req, res));
Router.get("/:id", (req, res) => IUserController.getUserById(req, res));
//# sourceMappingURL=userRoutes.js.map