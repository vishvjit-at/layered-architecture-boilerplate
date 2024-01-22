import { userRepo } from "../interfaces/repos/userRepo";

export class getAllUserUseCase {
  constructor(private repo: userRepo) {}

  async execute() {
    try {
      const data = await this.repo.getUsers();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("error:users not found");
    }
  }
}
