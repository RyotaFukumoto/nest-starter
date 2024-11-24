import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NestFactory.create() は、AppModule を引数に取り、NestApplication インスタンスを返す。
  const app = await NestFactory.create(AppModule);
  // NestApplication インスタンスの listen() メソッドを呼び出すことで、アプリケーションを起動する。
  await app.listen(process.env.PORT ?? 3000);
}
// bootstrap() 関数を呼び出す
bootstrap();
