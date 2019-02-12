import { Controller, Get, Param } from '@nestjs/common';

@Controller('getwords')
export class WordsController {
  @Get(':word')
  findOne(@Param('word') id) {
    return 'ddddd';
  }
}
