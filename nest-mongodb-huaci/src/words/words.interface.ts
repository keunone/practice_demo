import { Document } from 'mongoose';

export interface Word extends Document {
  readonly mainId: string;
}
