import { Module } from '@nestjs/common';
import { WordsController } from './controller';
import { WordsService } from './service';
import { WordsProviders } from './providers';

import { DatabaseModule } from '../../src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WordsController],
  providers: [WordsService, ...WordsProviders],
})
export class WordsModule {}
