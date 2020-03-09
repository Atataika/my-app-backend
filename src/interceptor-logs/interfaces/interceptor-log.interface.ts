import { Document } from 'mongoose';

export interface InterceptorLog extends Document {
  readonly data_created: string;
  readonly response: Response;
}
