const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
  title : String,
  introduction : String,
  created_at : { type : Date, default : Date.now }
})

const Company = module.exports = mongoose.model('Company',companySchema)