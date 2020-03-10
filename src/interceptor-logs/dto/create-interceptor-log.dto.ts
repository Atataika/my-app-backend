export class CreateInterceptorLogDTO {
  readonly error: boolean;
  readonly dateCreated: string;
  readonly status: number;
  readonly statusText: string;
  readonly url: string;
  readonly ok: boolean;
  readonly type?: number;
  readonly name?: string;
  readonly message?: string;
}
