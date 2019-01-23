import { Module } from '@nestjs/common';
import { GetWordsController } from './controller';
import { WordsService } from './service';

@Module({
    controllers: [GetWordsController],
    providers: [WordsService],
})

export class GetWordsModule {}
