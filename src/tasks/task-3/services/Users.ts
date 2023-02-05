import { Inject, Service } from "typedi";
import { Op } from "sequelize";

import { User, IUser } from "../models";

@Service()
export class UsersService {
  constructor(@Inject("userModel") private userModel: typeof User) {}

  public async findUserById(id: number): Promise<IUser> {
    return await this.userModel.findOne({ where: { id } });
  }

  public async getAllUsers(): Promise<Array<IUser>> {
    return await this.userModel.findAll();
  }

  public async getUsersByLogin(
    limit: number,
    loginSubString: string
  ): Promise<Array<IUser>> {
    return await this.userModel.findAll({
      limit,
      order: [["login", "DESC"]],
      where: {
        login: {
          [Op.like]: `%${loginSubString}%`,
        },
      },
    });
  }

  public async updateOrCreateUser(id: number, body: any) {
    const [, created] = await this.userModel.findOrCreate({
      where: { id },
      defaults: body,
    });

    if (!created) {
      await User.update(body, { where: { id } });
    }
  }

  public async deleteUser(id: number): Promise<boolean> {
    const user = await this.userModel.findOne({ where: { id } });

    if (user) {
      await User.update({ is_deleted: true }, { where: { id } });
      return true;
    }

    return false;
  }
}
