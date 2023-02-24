export class CustomError {
  public message: string | Error;

  constructor(message: string | Error) {
    this.message = message;
  }
}
