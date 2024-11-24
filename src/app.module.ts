import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// AppModule のクラス定義
@Module({
  imports: [],
  // AppController と AppService を提供する
  controllers: [AppController],
  providers: [AppService],
})
// AppModuleのクラス定義
export class AppModule {}
