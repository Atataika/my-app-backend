import { Module } from '@nestjs/common';
import { InterceptorLogsController } from './interceptor-logs.controller';
import { InterceptorLogsService } from './interceptor-logs.service';

@Module({
  controllers: [InterceptorLogsController],
  providers: [InterceptorLogsService],
})
export class InterceptorLogsModule {}
