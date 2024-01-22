import { userRepo } from "../interfaces/repos/userRepo";

export class getUserByIdUseCase {
  constructor(private repo: userRepo) {}

  async execute(id: number) {
    try {
      const data = await this.repo.getUserById(id);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("error:user not found");
    }
  }
}
