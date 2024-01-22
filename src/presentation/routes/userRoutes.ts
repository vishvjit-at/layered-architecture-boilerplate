import express from "express";
import { UserController } from "../controllers/userController";

const Router = express.Router();

const IUserController = new UserController();

Router.get("/create", (req, res) => IUserController.createUser(req, res));
Router.get("/all", (req, res) => IUserController.getAllUsers(req, res));
Router.get("/:id", (req, res) => IUserController.getUserById(req, res));

export { Router };
