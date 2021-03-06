import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WordsModule } from './words/module';

async function bootstrap() {
  const app = await NestFactory.create(WordsModule);
  // const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
