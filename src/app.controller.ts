import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// AppController のクラス定義
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ルートパスへのGETリクエストに対するハンドラ
  @Get()
  getHello(): string {
    // AppService の getHello メソッドを呼び出す
    return this.appService.getHello();
  }
}
