import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GetWordsModule } from './modules/getwords/module';

async function bootstrap() {
  const app = await NestFactory.create(GetWordsModule);
  // const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
