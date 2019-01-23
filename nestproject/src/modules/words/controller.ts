import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WordsService } from './service';
import { Word } from './interfaces/words.interface';
import { CreateWordDto } from './dto/words.dto';
@Controller() // 参数为公共路径前缀
export class GetWordsController {
    constructor(private readonly wordsService: WordsService) { }
    @Post()
    async create( @Body() createWordDto: CreateWordDto) {
        return this.wordsService.create(CreateWordDto);
    }

    @Get()
    async findAll(): Promise<Word[]> {
        return this.wordsService.findAll();
    }

    @Get('/:id')
    async findById( @Param('id') _id): Promise<Word> {
        // tslint:disable-next-line:no-console
        console.log(_id);
        return this.wordsService.findById(_id);
    }
}
