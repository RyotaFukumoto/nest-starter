import { Injectable } from '@nestjs/common';

// AppService のクラス定義
@Injectable()
export class AppService {
  // getHello メソッドの定義
  getHello(): string {
    // 'Hello World!' を返す
    return 'Hello World!';
  }
}
