import { Injectable } from '@nestjs/common';
// import mongoose from 'mongoose';
// tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');
// tslint:disable-next-line:no-var-requires
const Mongolass = require('mongolass');
const mongolass = new Mongolass();

// tslint:disable-next-line:no-console
console.log('ceshi444:', mongolass);
mongoose.connection('mongodb://localhost:27017/myblog');
const db = mongoose.connection;
db.once('open', () => {
    // tslint:disable-next-line:no-console
    console.log('ceshi', mongoose);
    // we're connected!
});
const User = mongoose.Schema('User', {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    gender: { type: 'string', enum: ['m', 'f', 'x'], default: 'x' },
    bio: { type: 'string', required: true },
});

// const User = require('../../../../lib').User
// const User = require('../../../lib/mongo')

// module.exports = {
//     // 注册一个用户
//     create: function create(user) {
//         return User.create(user).exec();
//     },

//     // 通过用户名获取用户信息
//     getUserByName: function getUserByName(name) {
//         return User
//             .findOne({ name: name })
//             .addCreatedAt()
//             .exec()
//     }
// }

@Injectable()
export class GetWordsService {
    async getWordPrompt(text) {
        // alert('text:' + JSON.stringify(User.findOne({ name: text }).addCreatedAt().exec()));
        const obj = {
            text: '请求参数是：' + text,
        };
        return obj;
    }
}
