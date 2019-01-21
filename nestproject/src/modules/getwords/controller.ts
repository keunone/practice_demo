import { Controller, Get, Param } from '@nestjs/common';
import { GetWordsService } from './service';

@Controller() // 参数为公共路径前缀
export class GetWordsController {
    constructor(private readonly getWordsService: GetWordsService) { }
    @Get('/getwords/words/:text')
    getWordInfo( @Param() params): object {
        return this.getWordsService.getWordPrompt(params.text);
    }
}
