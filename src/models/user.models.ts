import { UserModel } from './schemas/user.mongo';
import { encryptPassword } from '../utils';
import { IUser, IUserDTO } from '../entities';

export const findUserByFilter = async (filter: any): Promise<any> => {
  return UserModel.findOne(filter);
}

export const getUserByIdWithFields = async (userId: number, fields: string): Promise<Partial<IUserDTO> | null> => {
  return UserModel.findById(userId).select(fields);
}

export const createNewUser = ({ email, password }: IUser): Promise<Partial<IUserDTO>> => {
  const user = new UserModel({
    email,
    password: encryptPassword(password)
  });

  return user.save();
}
