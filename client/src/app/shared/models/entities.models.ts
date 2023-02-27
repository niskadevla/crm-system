export interface IUser {
  email: string;
  password: string;
}

export interface ICategory {
  name: string;
  imageSrc?: string;
  user: string;
  _id: string;
}

export interface IPosition {
  name: string;
  cost: number;
  category: string;
  user?: string;
  _id?: string;
}
