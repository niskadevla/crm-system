import JWT from 'jsonwebtoken';

import { ENV_CONFIG } from '../env-config';
import { CustomError, errorHandler, IJwtResponse, IPostRequest, matchPasswords } from '../utils';
import { IUser, IUserDTO } from '../entities';
import { createNewUser, findUserByFilter } from '../models/user/user.models';
import { TIME_EXPIRATION } from '../utils';

export const httpLogin = async ({ body: { email, password } }: IPostRequest<IUser>, res: any) => {
  const candidate = await findUserByFilter({ email });

  if (candidate) {
    if (matchPasswords(password, candidate.password)) {
      const jwtPayload: IJwtResponse = {
        email,
        userId: candidate._id
      };
      const jwtOptions = { expiresIn: TIME_EXPIRATION };
      const token: string = JWT.sign(jwtPayload, ENV_CONFIG.JWT, jwtOptions);

      return res.status(200).json({
        token: `Bearer ${token}`
      });
    } else {
      return res.status(401).json(new CustomError('Passwords do not match. Try again!'));
    }
  } else {
    return res.status(404).json(new CustomError(`User with this email ${email} does not exist!`));
  }
};

export const httpRegister = async ({ body }: IPostRequest<IUser>, res: any) => {
  const { email } = body;
  const candidate = await findUserByFilter({ email });

  if (candidate) {
    return res.status(409).json(new CustomError(`User with this ${email} already exists. Try another one!`));
  } else {
    try {
      const user: Partial<IUserDTO> = await createNewUser(body);

      return res.status(201).json(user);
    } catch (err: unknown) {
      return errorHandler(res, err as Error);
    }
  }
};
