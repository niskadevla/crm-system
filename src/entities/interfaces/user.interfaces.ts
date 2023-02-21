export interface IUser {
  email: string;
  password: string;
}

export interface IUserDTO extends IUser {
  id: string
}