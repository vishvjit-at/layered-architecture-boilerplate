import { userEntity } from "../../../domain/entities/userEntity";
import { userMapper } from "../mappers/userMapper";
import { userRepo } from "../../../domain/interfaces/repos/userRepo";
import { userSequelize } from "../sequalize/sequalizeModel";

export class UserRepoImplementation implements userRepo {
  async getUserById(id: number): Promise<userEntity | undefined> {
    const data = await userSequelize.findByPk(id);
    if (!data) {
      return;
    }
    const data2 = userMapper.toDomain([data]);
    return data2[0];
  }

  async createUser(user: userEntity): Promise<number> {
    const insertedData = await userSequelize.create({
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      password: user.getPassword(),
    });
    return insertedData.dataValues.id;
  }

  async getUsers(): Promise<userEntity[]> {
    const data = await userSequelize.findAll();

    return userMapper.toDomain(data);
  }
}
