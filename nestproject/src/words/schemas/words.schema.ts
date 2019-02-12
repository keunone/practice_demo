import * as mongoose from 'mongoose';

export const WordSchema = new mongoose.Schema({
    word: String,
    des: String,
    imgUrl: String,
});
