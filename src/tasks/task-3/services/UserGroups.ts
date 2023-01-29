import { Inject, Service } from "typedi";

import { Group, User, UserGroups } from "../models";

@Service()
export class UserGroupsService {
  constructor(
    @Inject("userGroupsModel") private userGroupsModel: typeof UserGroups,
    @Inject("groupModel") private groupModel: typeof Group,
    @Inject("userModel") private userModel: typeof User
  ) {}

  public async addUsersToGroup(groupId: number, userId: number): Promise<void> {
    const group = await await this.groupModel.findOne({
      where: { id: groupId },
    });
    const nameUser = await this.userModel.findOne({ where: { id: userId } });
    await this.userGroupsModel.create({
      groupId,
      userId,
      nameGroup: group.name,
      nameUser: nameUser.login,
    });
  }

  public async getUserGroupsTable() {
    return await this.userGroupsModel.findAll();
  }
}
