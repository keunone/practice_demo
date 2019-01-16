const express = require('express')
const router = express.Router()
const Company = require('../models/company')

// 查询所有公司
router.get('/company', (req, res) => {
	Company.find({})
	.sort({ update_at : -1})
	.then(companies => {
		res.json(companies)
	})
	.catch(err => {
		res.json(err)
	})
})

// 添加一个公司的信息
router.post('/company', (req, res) => {
	//使用Movie model上的create方法储存数据
	Company.create(req.body, (err, comp) => {
	  if (err) {
		res.json(err)
	  } else {
		res.json(comp)
	  }
	})
})
module.exports = router
