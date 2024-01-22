import { UserRepoImplementation } from "../infrastructure/repository/mysql/userRepo";
import { createUserDto } from "../domain/interfaces/dtos/dots";
import { createUserUseCase } from "../domain/useCases/createUser";
import { getAllUserUseCase } from "../domain/useCases/getAllUser";
import { getUserByIdUseCase } from "../domain/useCases/getUserById";

export class UserGateway {
  userRepo: UserRepoImplementation;
  constructor() {
    this.userRepo = new UserRepoImplementation();
  }
  createUser(user: createUserDto) {
    const createUser = new createUserUseCase(this.userRepo);

    return createUser.execute(user);
  }

  getAllUsers() {
    const getAllUser = new getAllUserUseCase(this.userRepo);

    return getAllUser.execute();
  }

  getUserById(id: number) {
    const getUserById = new getUserByIdUseCase(this.userRepo);

    return getUserById.execute(id);
  }
}
