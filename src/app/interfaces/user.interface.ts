export interface IUser {
    [x: string]: any;
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: RoleId,
    id:number
  }

export interface IAuthResult{

}

export enum RoleId {
  ADMIN = 1,
  MANAGER = 2,
  EDITOR = 3
}

export class User {
  public firstName: string = "";
  public lastName: string = "";
  public password: string = "";
  public email: string = "";
  public role: string = "";
  public id: number = 0;
}
  