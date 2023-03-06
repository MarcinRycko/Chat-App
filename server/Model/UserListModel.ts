export default class UsersList {
  public usersList: { id: string; username: string }[];
  constructor() {
    this.usersList = [];
  }

  public isUserExist = (id: string) => {
    return Boolean(this.usersList.find((user) => user.id === id));
  };

  public findUser = (id: string) => {
    if (this.isUserExist(id)) {
      return this.usersList.find((user) => user.id === id);
    } else {
      throw new Error(`User with id:${id} is not exist`);
    }
  };

  public addUser = (id: string, username: string) => {
    if (!this.isUserExist(id)) {
      this.usersList.push({ username, id });
    } else {
      throw new Error(`User with id:${id} is already exist`);
    }
  };

  public removeUser = (id: string) => {
    if (this.isUserExist(id)) {
      this.usersList = this.usersList.filter((user) => user.id !== id);
    } else {
      throw new Error(`User with id:${id} is not exist`);
    }
  };

  public updateUserName = (id: string, newUsername: string) => {
    const user = this.findUser(id);
    if (user) {
      user.username = newUsername;
    }
  };
}
