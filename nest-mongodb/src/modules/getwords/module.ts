import { Module } from '@nestjs/common';
import { GetWordsController } from './controller';
import { GetWordsService } from './service';

@Module({
    controllers: [GetWordsController],
    providers: [GetWordsService],
})

export class GetWordsModule {}
