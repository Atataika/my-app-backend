import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInterceptorLogDTO } from './dto/create-interceptor-log.dto';
import { InterceptorLog } from './interfaces/interceptor-log.interface';

@Injectable()
export class InterceptorLogsService {
  constructor(
    @InjectModel('Interceptor-log')
    private readonly logModel: Model<InterceptorLog>,
  ) {}

  async getLogs(): Promise<InterceptorLog[]> {
    const logs = this.logModel.find().exec();
    return logs;
  }

  async addLog(
    createInterceptorLogDTO: CreateInterceptorLogDTO,
  ): Promise<InterceptorLog> {
    const newLog = new this.logModel(createInterceptorLogDTO);
    return newLog.save();
  }
}
