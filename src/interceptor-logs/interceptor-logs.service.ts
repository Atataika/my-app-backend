import { Injectable } from '@nestjs/common';

@Injectable()
export class InterceptorLogsService {
  getHello(): string {
    return 'Hello World!';
  }
}
