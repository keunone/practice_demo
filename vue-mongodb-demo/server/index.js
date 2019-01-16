const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const index = require('./router/index')
const company = require('./router/company')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('路由路径：', req.path)
    next()
})
app.use('/',index)
app.use('/api',company)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')

app.listen(3000,() => {
    console.log('app listening on port 3000.')
})