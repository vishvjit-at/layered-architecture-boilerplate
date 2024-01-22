import { userEntity } from "../../entities/userEntity";

export interface userRepo {
  getUserById(id: number): Promise<userEntity | undefined>;
  createUser(user: userEntity): Promise<number>;
  getUsers(): Promise<userEntity[]>;
}
