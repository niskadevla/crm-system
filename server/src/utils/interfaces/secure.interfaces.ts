import { IUserDTO } from '../../entities';

export interface IJwtResponse {
  email: string;
  userId: string;
}

export interface IJwtRequest extends Pick<IUserDTO, 'email' | 'id'> {
}
