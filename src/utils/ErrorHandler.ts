import { STATUS_CODES } from 'http';

export class HookError extends Error {
  public status: any;
  public constructor(errorMessage: string, statusCode: any = 200) {
    super(errorMessage);

    this.name = "HookError";
    this.status = STATUS_CODES[statusCode];
  };
};