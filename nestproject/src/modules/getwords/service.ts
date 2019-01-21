import { Injectable } from '@nestjs/common';
// tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const companySchema = mongoose.Schema({
    title : String,
    introduction : String,
    created_at : { type : Date, default : Date.now },
  });
const Company = mongoose.model('Company', companySchema );

@Injectable()
export class GetWordsService {
    async getWordPrompt(text) {
        return Company.find({}).sort({ update_at : -1}).then(companies => {
            return companies;
          });
    }
}
