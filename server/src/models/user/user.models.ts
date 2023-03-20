import { UserModel } from './user.mongo';
import { encryptPassword } from '../../utils';
import { IUser, IUserDTO } from '../../entities';

export const findUserByFilter = async (filter: any): Promise<any> => {
  return UserModel.findOne(filter);
}

export const getUserByIdWithFields = async (userId: string, fields: string): Promise<Partial<IUserDTO> | null> => {
  return UserModel.findById(userId).select(fields);
}

export const createNewUser = async ({ email, password }: IUser): Promise<Partial<IUserDTO>> => {
  const encryptedPassword = await encryptPassword(password);
  const user = new UserModel({
    email,
    password: encryptedPassword
  });

  return user.save();
}
