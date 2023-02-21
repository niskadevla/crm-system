import { ICustomError } from '../interfaces';

export class CustomError {
  public error: ICustomError;

  constructor(message: string | Error) {
    this.error = { message };
  }
}
