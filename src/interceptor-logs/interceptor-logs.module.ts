import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InterceptorLogsController } from './interceptor-logs.controller';
import { InterceptorLogsService } from './interceptor-logs.service';
import { InterceptorLogSchema } from './schemas/interceptor-log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Interceptor-log', schema: InterceptorLogSchema },
    ]),
  ],
  controllers: [InterceptorLogsController],
  providers: [InterceptorLogsService],
})
export class InterceptorLogsModule {}
