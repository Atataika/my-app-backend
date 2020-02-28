import { Module } from '@nestjs/common';
import { InterceptorLogsModule } from './interceptor-logs/interceptor-logs.module';

@Module({
  imports: [InterceptorLogsModule],
})
export class AppModule {}
