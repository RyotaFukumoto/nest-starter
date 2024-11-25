import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

// AppModule のクラス定義
@Module({
  // nest generate module tasks で生成された TasksModule をインポート
  imports: [TasksModule],
  // AppController と AppService を提供する
  controllers: [AppController],
  providers: [AppService],
})
// AppModuleのクラス定義
export class AppModule {}
