import { Connection } from 'mongoose';
// 引入schema
import { WordSchema } from './schemas/words.schema';

export const catsProviders = [
    {
        // 自己定义一个到时候在service.ts中注入
        provide: 'WordModelToken',
        // 使用CatSchema
        useFactory: (connection: Connection) => connection.model('Word', WordSchema),
        // MongoDBConnection是database.providers.ts里面的key
        inject: ['MongoDBConnection'],
    },
];
