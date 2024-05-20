import { INewUser, User } from "../types";


class Database {
  private users: INewUser[] = [];
  private currentId: number = 1;

  addUser(username: string, password: string, email:string): INewUser {
    const user = new User(this.currentId++, username, password, email);
    
    this.users.push(user);
    return user;
  }

  findUser(email: string): INewUser | undefined {
    return this.users.find(user => user.email === email);
  }
}

export const db = new Database();