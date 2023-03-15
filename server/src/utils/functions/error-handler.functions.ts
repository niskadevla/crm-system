import { CustomError } from '../classes';

export const errorHandler = (res: any, error: Error) => {
  const message = error.message ? error.message : error;

  return res.status(500).json(new CustomError(message));
}
