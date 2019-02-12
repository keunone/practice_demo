import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WordsService } from './service';
import { Word } from './interfaces/words.interface';
import { CreateWordDto } from './dto/words.dto';
@Controller() // 参数为公共路径前缀
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}
  @Post()
  async create(@Body() createWordDto: CreateWordDto) {
    return this.wordsService.create(createWordDto);
  }

  @Get()
  async findAll(): Promise<Word[]> {
    return this.wordsService.findAll();
  }

  //   @Get('/:id')
  //   async favicon(@Param('id') id): Promise<Word> {
  //     // tslint:disable-next-line:no-console
  //     console.log(id);
  //     return this.wordsService.findById(id);
  //   }
}
