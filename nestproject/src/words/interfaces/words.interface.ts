import { Document } from 'mongoose';

export interface Word extends Document {
    readonly word: string;
    readonly des: string;
    readonly imgUrl: string;
}
