import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { InterceptorLogsService } from './interceptor-logs.service';

@Controller('interceptor-logs')
export class InterceptorLogsController {
  constructor(private readonly appService: InterceptorLogsService) {}

  @Get()
  getHello(@Res() res: any): string {
    const a = this.appService.getHello();
    return res.status(HttpStatus.OK).json(a);
  }

  @Get('foo')
  foo(): string {
    return 'fooS';
  }

  @Post('post')
  a(@Req() req: any) {
    console.log(req.body);
  }
}
