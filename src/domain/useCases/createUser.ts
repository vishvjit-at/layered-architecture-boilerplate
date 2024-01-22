import { userRepo } from "../interfaces/repos/userRepo";
import { userEntity } from "../entities/userEntity";
import { createUserDto } from "../interfaces/dtos/dots";

export class createUserUseCase {
  constructor(private repo: userRepo) {}

  async execute(aParams: createUserDto) {
    try {
      const params = new userEntity(
        aParams.firstName,
        aParams.lastName,
        aParams.password
      );
      const data = await this.repo.createUser(params);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("error");
    }
  }
}
