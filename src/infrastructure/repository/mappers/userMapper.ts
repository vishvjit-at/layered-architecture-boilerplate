import { userSequelize } from "../sequalize/sequalizeModel";
import { userEntity } from "../../../domain/entities/userEntity";

export class userMapper {
  static toDomain(raw: userSequelize[]) {
    const data: userEntity[] = [];
    raw.forEach((user) => {
      const userDetails = new userEntity(
        user.dataValues.firstName,
        user.dataValues.lastName,
        user.dataValues.id
      );
      data.push(userDetails);
    });
    return data;
  }

  static toPersist(raw: userEntity) {
    const name = `${raw.getFirstName()} ${raw.getLastName()}`;
    const id = raw.getId();
    return { name, id };
  }
}
