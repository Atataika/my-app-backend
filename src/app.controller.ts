import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  a(@Request() req: any) {
    console.log(req.body);
  }
}
