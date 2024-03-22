import { IUsers } from "@/domain/user/IUsers";
import { IUser } from "@/domain/user/IUser";

export default class Users implements IUsers {
  users: IUser[] = [];

  constructor() {
  }

  loadData(data: IUser[]) {
    this.users = data.map(iUser => {
      return { id: iUser.id, name: iUser.name };
    });
  }

  copy(): Users {
    const users = new Users();
    users.loadData(this.users);
    return users;
  }

  add(user: IUser): void {
    this.users.push(user);
  }

  getAll() {
    return this.copy().users;
  }
};
