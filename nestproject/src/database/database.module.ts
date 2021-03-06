import { Module } from '@nestjs/common';
// import { databaseProviders } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/captureWord')],
})
export class DatabaseModule {}
