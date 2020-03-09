import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { InterceptorLogsModule } from './interceptor-logs/interceptor-logs.module';

@Module({
  imports: [
    BlogModule,
    InterceptorLogsModule,
    MongooseModule.forRoot('mongodb://localhost/myapp', {
      useNewUrlParser: true,
    }),
  ],
})
export class AppModule {}
