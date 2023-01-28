import { Inject, Service } from "typedi";

import { Group, IGroup } from "../models";

@Service()
export class GroupService {
  constructor(@Inject("groupModel") private groupModel: typeof Group) {}

  public async findGroupById(id: number): Promise<IGroup> {
    return await this.groupModel.findOne({ where: { id } });
  }

  public async getAllGroups(): Promise<Array<IGroup>> {
    return await this.groupModel.findAll();
  }

  public async updateOrCreateGroup(id: number, body: any): Promise<boolean> {
    const [, created] = await this.groupModel.findOrCreate({
      where: { id },
      defaults: body,
    });

    if (!created) {
      const result = await Group.update(body, { where: { id } });
      return result[0] === 1;
    }

    return created;
  }

  public async deleteGroup(id: number): Promise<boolean> {
    const result = await this.groupModel.destroy({ where: { id } });
    return result === 1;
  }
}
