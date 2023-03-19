export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400, validation?: any) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
