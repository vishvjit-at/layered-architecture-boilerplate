import { UserGateway } from "../../gateways/userGateway";
import { createUserDto } from "../../domain/interfaces/dtos/dots";
import { Request, Response } from "express";

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const firstName = req.query.firstName as string;
      const lastName = req.query.lastName as string;
      const password = req.query.password as string;

      const data: createUserDto = {
        firstName,
        lastName,
        password,
      };

      const userId = new UserGateway().createUser(data);

      res.json({ userId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = new UserGateway().getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as unknown as number;
      const users = new UserGateway().getUserById(id);
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}
