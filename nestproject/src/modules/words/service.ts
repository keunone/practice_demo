import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Word } from './interfaces/words.interface';
import { CreateWordDto } from './dto/words.dto';
// @Injectable()
@Injectable()
export class WordsService {
    // 注入的WordModelToken要与providers.ts里面的key一致就可以
    constructor( @Inject('WordModelToken') private readonly wordModel: Model<Word>) { }

    // 创建数据
    async create(createCatDto: CreateWordDto): Promise<Word> {
        const createdWord = new this.wordModel(createCatDto);
        return await createdWord.save();
    }

    // 查询全部数据
    async findAll(): Promise<Word[]> {
        return await this.wordModel.find().exec();
    }

    // 根据id查询
    async findById(_id): Promise<Word> {
        return await this.wordModel.findById(_id).exec();
    }
}
