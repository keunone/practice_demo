var restify = require('restify');


function respond(req, res, next, data, timeout = 0) {
  setTimeout(function() {
    res.json(data)
    next()
  }, timeout)
}

var server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// 话题趋势图
server.get('/api/txtanls/topic/ratio/trend/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "ratioval":"str", // 提及率值
          "time":"str" // 周期变化对应的时间，坐标轴上的时间
      },
      {
          "ratioval": "0.64",
          "time": "2019-02-04"
      },
      {
          "ratioval": "0.18",
          "time": "2019-02-03"
      },
      {
          "ratioval": "0.36",
          "time": "2019-02-02"
      },
      {
          "ratioval": "0.26",
          "time": "2019-02-01"
      },
      {
          "ratioval": "0.24",
          "time": "2019-01-30"
      }
    ]
  })
})
// 话题两点图
server.get('/api/txtanls/topic/ratio/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "topicgrname":"str", // 话题名
          "currentratio":"str", // 本期话题提及率
          "previousratio":"str", // 上期话题提及率
          "ringgrowth":"str", // 比上期数据
          "topicId":"str" // 话题Id
      },
      {
          "currentratio": 0.94,
          "previousratio": 0.62,
          "ringgrowth": 0.32,
          "topicgrId": "5d4be9d6352a7a7a949e2348",
          "topicgrname": "饺子1"
      },
      {
          "currentratio": 0.64,
          "previousratio": 0.52,
          "ringgrowth": 0.12,
          "topicgrId": "5d4be9d6352a7a7a949e2348",
          "topicgrname": "饺子2"
      },
      {
          "currentratio": 0.44,
          "previousratio": 0.22,
          "ringgrowth": 0.11,
          "topicgrId": "5d4be9d6352a7a7a949e2348",
          "topicgrname": "饺子3"
      },
      {
          "currentratio": 0.64,
          "previousratio": 0.52,
          "ringgrowth": 0.52,
          "topicgrId": "5d4be9d6352a7a7a949e2348",
          "topicgrname": "饺子4"
      },
      {
          "currentratio": 0.24,
          "previousratio": 0.34,
          "ringgrowth": -0.09999999999999998,
          "topicgrId": "5d4be9f5352a7a878c00d5f7",
          "topicgrname": "饺子4"
      },
    ]
  })
})
// 话题组趋势图
server.get('/api/txtanls/topicgr/ratio/trend/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "ratioval":"str", // 提及率值
          "time":"str" // 周期变化对应的时间，坐标轴上的时间
      },
      {
          "ratioval": "0.93",
          "time": "2019-02-05"
      },
      {
          "ratioval": "1.0",
          "time": "2019-01-30"
      },
      {
          "ratioval": "1.0",
          "time": "2019-03-30"
      },
      {
          "ratioval": "1.0",
          "time": "2019-04-30"
      },
      {
          "ratioval": "1.0",
          "time": "2019-05-30"
      },
    ]
  })
})
// 话题组两点图
server.get('/api/txtanls/topicgrs/ratio/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "topicgrname":"str", // 话题组名
          "currentratio":"str", // 本期话题组提及率
          "previousratio":"str", // 上期话题组提及率
          "ringgrowth":"str", // 比上期数据
          "topicgrId":"str" // 话题组Id
      },
      {
          "currentratio": 1,
          "previousratio": 0.92,
          "ringgrowth": 0.07,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "未分组"
      },
      {
          "currentratio": 1,
          "previousratio": 0.92,
          "ringgrowth": 0.07,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎很长很长的生煎呢"
      },
      {
          "currentratio": 1,
          "previousratio": 0.92,
          "ringgrowth": 0.07,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎3"
      },
      {
          "currentratio": 1,
          "previousratio": 0.92,
          "ringgrowth": 0.07,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎4"
      },
      {
          "currentratio": 0.87,
          "previousratio": 0.32,
          "ringgrowth": 0.27,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎5"
      },
      {
          "currentratio": 0.87,
          "previousratio": 0.91,
          "ringgrowth": 0.87,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎6"
      },
      {
          "currentratio": 0.76,
          "previousratio": 0.32,
          "ringgrowth": 0.27,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎7"
      },
      {
          "currentratio": 0.64,
          "previousratio": 0.72,
          "ringgrowth": 0.3,
          "topicgrId": "5d4be7d8352a7a553cb71545",
          "topicgrname": "生煎8"
      },
      {
          "currentratio": 0.15,
          "previousratio": 0.28,
          "ringgrowth": 0.46,
          "topicgrId": "5d4be9f5352a7a878c00d5f7",
          "topicgrname": "生煎9"
      }
    ]
  })
})

server.get('/api/txtanls/projects/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [{
      id: "1",
      projectname: '我的项目名称',
      username: 'abadfasfdasf',
      datasource: [{
        qtitle: 'sdlfasldfadsf',
        datasrctype: 0,
        question: 'sdfaslfdjasdlfasdflasdfsdfaslfdjasdlfasdflasdfsdfaslfdjasdlfasdflasdf',
        starttime: new Date(),
        endtime: new Date(),
        filename: 'akkdslfjasldfjalsdfjld',
      }, {
        qtitle: 'sdlfasldfadsf',
        datasrctype: 0,
        question: 'sdfaslfdjasdlfasdflasdf',
        starttime: new Date(),
        endtime: new Date(),
        filename: 'akkdslfjasldfjalsdfjld',
      }, {
        qtitle: 'sdlfasldfadsf',
        datasrctype: 1,
        question: 'sdfaslfdjasdlfasdflasdf',
        starttime: new Date(),
        endtime: new Date(),
        filename: 'akkdslfjasldfjalsdfjld',
      }]
    }, {
      id: "2",
      projectname: '我的项目名称',
      username: 'abadfasfdasf',
      datasource: [{
        qtitle: 'sdlfasldfadsf',
        datasrctype: 0,
        question: 'sdfaslfdjasdlfasdflasdf',
        starttime: new Date(),
        endtime: new Date(),
        filename: 'akkdslfjasldfjalsdfjld',
      }]
    }, {
      id: "3",
      projectname: '我的项目名称',
      username: 'abadfasfdasf',
      datasource: [{
        qtitle: 'sdlfasldfadsf',
        datasrctype: 0,
        question: 'sdfaslfdjasdlfasdflasdf',
        starttime: new Date(),
        endtime: new Date(),
        filename: 'akkdslfjasldfjalsdfjld',
      }]
    }]
  })
})

server.del('/api/txtanls/projects/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200
  }, 1500)
})

server.get('/api/txtanls/survey/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [{
      title: 'adfasdf',
      questions: ['dadfsaf',  'a', 'sadfasfads'],
      starttime: new Date(),
      endtime: new Date(),
      id: 0
    }, {
      title: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      questions: ['dadfsaf',  'a', 'sadfasfads'],
      starttime: new Date(),
      endtime: new Date(),
      id: 1
    }]
  })
})

server.get('/api/txtanls/upload/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [{
      filename: 'asdfasdfasdf',
      fileId: 0
    }, {
      filename: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      fileId: 1
    }]
  })
})

server.put('/api/txtanls/upload/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0
  }, 2000)
})

server.del('/api/txtanls/upload/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0
  }, 2000)
})

server.listen(7999, function() {
  console.log('%s listening at %s', server.name, server.url);
});