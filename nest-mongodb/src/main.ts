import { NestFactory } from '@nestjs/core';
import { GetWordsModule } from './modules/getwords/module';

async function bootstrap() {
  const app = await NestFactory.create(GetWordsModule);
  await app.listen(3000);
}
bootstrap();
