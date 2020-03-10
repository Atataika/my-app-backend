import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateInterceptorLogDTO } from './dto/create-interceptor-log.dto';
import { InterceptorLogsService } from './interceptor-logs.service';

@Controller('interceptor-logs')
export class InterceptorLogsController {
  constructor(private logsService: InterceptorLogsService) {}

  @Get('logs')
  async getPosts(@Res() res) {
    const posts = await this.logsService.getLogs();
    return res.status(HttpStatus.OK).json(posts);
  }

  @Post('/log')
  async addPost(@Res() res, @Body() createPostDTO: CreateInterceptorLogDTO) {
    const newLog = await this.logsService.addLog(createPostDTO);

    // FIXME: Временно заглушил потому что интерцептор рекурсивно записывает логи
    // return res.status(HttpStatus.OK).json({
    //   message: 'Log has been submitted successfully!',
    //   post: newLog,
    // });
  }
}
