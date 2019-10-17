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

// 话题管理

// 重命名话题
server.put('/api/txtanls/topics/update/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d6a209f76aa2c000bbce17e"
  }, 2000)
})

// 重命名话题组
server.put('/api/txtanls/topicgroups/update/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d68f99076aa2c00093c5c2f"
  }, 2000)
})

// 删除话题
server.del('/api/txtanls/topics/:topicgrid/', function(req, res, next) {
  respond(req, res, next, {
    "code": 0,
    "data": 1
  })
})
// 删除话题组
server.del('/api/txtanls/topicgroups/delete/:topic_id/', function(req, res, next) {
  respond(req, res, next, {
    "code": 0,
    "data": 1
  })
})

// 获取话题组信息
server.get('/api/txtanls/topicgroups/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
        "id": "5d4be7d8352a7a553cb71545", // 话题组id
        "name": "未分组",  // 话题组名
        "data": [
            {
                "name": "生煎", // 话题名
                "num": 999,  // 话题关联的原话记录数量
                "topic_id": "5d4be9d6352a7a7a949e2348"  // 话题id
            },
            {
                "name": "生煎2",
                "num": 1,
                "topic_id": "5d4be9f5352a7a878c00d5f7"
            },
            {
                "name": "生煎3",
                "num": 0,
                "topic_id": "5d4bea14352a7a5b242797ad"
            }
        ]
      },
      {
        "id": "5d4be7d8352a7a553cb71547",
        "name": "卫生",
        "data": [
            {
                "name": "食材",
                "num": 40,
                "topic_id": "5d4bfbd2352a7a4460fcc145"
            },
            {
                "name": "食材1",
                "num": 40,
                "topic_id": "5d4bfbd9352a7a721469078a"
            },
            {
                "name": "食材2",
                "num": 30,
                "topic_id": "5d4bfbe2352a7a1284ecd3c6"
            },
            {
                "name": "环境",
                "num": 30,
                "topic_id": "5d4bfc09352a7a3f7005925c"
            },
            {
                "name": "环境1",
                "num": 10,
                "topic_id": "5d4bfc2b352a7a70fc0e381a"
            },
            {
                "name": "环境2",
                "num": 0,
                "topic_id": "5d4bfc34352a7a71681b967a"
            }
        ]
    }
    ]
  })
})
// 获取原话记录关联话题和没有关联的数量
server.get('/api/txtanls/record/relation/info/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    hastopicgroup: true,
    data: {
      "associated": 1000, // 关联过话题的原话记录数量
      "non_affiliated": 0 // 没有关联过话题的原话记录数量
    }
  })
})

// 话题筛选器
server.get('/api/txtanls/topic/mentions/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    hastopicgroup: true,
    data: [
      {
        "total_num": 11,
        "topicgrname": "生煎组",
        "topicgrid": "5d4be7d8352a7a553cb71545",
        "topiclist": [
          {
              "topicname": "生煎",
              "mentionnum": 9,
              "topicid": "49e2348"
          },
          {
              "topicname": "生煎2",
              "mentionnum": 2,
              "topicid": "5d4be9f5352d5f7"
          },
          {
              "topicname": "生煎3",
              "mentionnum": 2,
              "topicid": "5d47a5b242797ad"
          }
        ]
      },
      {
        "total_num": 13,
        "topicgrname": "饺子组",
        "topicgrid": "5d4be7553cb71546",
        "topiclist": [
          {
              "topicname": "饺子1",
              "mentionnum": 9,
              "topicid": " a7a7a949e2348"
          },
          {
              "topicname": "饺子2",
              "mentionnum": 2,
              "topicid": " 78c00d5f7"
          },
          {
              "topicname": "饺子3",
              "mentionnum": 2,
              "topicid": " 242797ad"
          }
        ]
      },
      {
        "total_num": 13,
        "topicgrname": "包子组",
        "topicgrid": "5d4be7547",
        "topiclist": [
          {
              "topicname": "包子1",
              "mentionnum": 9,
              "topicid": "5d4be9d6352a "
          },
          {
              "topicname": "包子2",
              "mentionnum": 2,
              "topicid": "5d4be9f535 "
          },
          {
              "topicname": "包子3",
              "mentionnum": 2,
              "topicid": "5d4bea14352a7a5b"
          }
        ]
      },
     {
      "total_num": 13,
      "topicgrname": "煎饼组",
      "topicgrid": "5d4be548",
      "topiclist": [
        {
            "topicname": "煎饼1",
            "mentionnum": 9,
            "topicid": "5d4be9d6 "
        },
        {
            "topicname": "煎饼2",
            "mentionnum": 2,
            "topicid": "5d4b"
        },
        {
            "topicname": "煎饼3",
            "mentionnum": 2,
            "topicid": "5d4be"
        }
      ]
    }
  ]
  })
})

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
      // {
      //     "ratioval":"str", // 提及率值
      //     "time":"str" // 周期变化对应的时间，坐标轴上的时间
      // },
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

// 总体情感趋势接口
server.get('/api/txtanls/records/emotiontrend/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: {
      "list": [
        {
            "totalnum": 27,
            "posnum": 15,
            "neunum": 11,
            "mixnum": 1,
            "negnum": 0,
            "time": "2019-03-06"
        },
        {
            "totalnum": 24,
            "posnum": 12,
            "neunum": 12,
            "mixnum": 0,
            "negnum": 0,
            "time": "2019-02-23"
        },
        {
            "totalnum": 24,
            "posnum": 12,
            "neunum": 12,
            "mixnum": 0,
            "negnum": 0,
            "time": "2019-02-15"
        },
        {
            "totalnum": 24,
            "posnum": 12,
            "neunum": 15,
            "mixnum": 32,
            "negnum": 0,
            "time": "2019-02-12"
        },
        {
            "totalnum": 24,
            "posnum": 12,
            "neunum": 12,
            "mixnum": 12,
            "negnum": 21,
            "time": "2019-02-11"
        },
        {
            "totalnum": 24,
            "posnum": 12,
            "neunum": 25,
            "mixnum": 32,
            "negnum": 0,
            "time": "2019-02-10"
        },
        {
            "totalnum": 34,
            "posnum": 52,
            "neunum": 12,
            "mixnum": 5,
            "negnum": 4,
            "time": "2019-02-09"
        },
        {
            "totalnum": 23,
            "posnum": 13,
            "neunum": 14,
            "mixnum": 4,
            "negnum": 6,
            "time": "2019-02-08"
        },
      ]  
    }
  })
})

// 总体情感细分接口
server.get('/api/txtanls/records/emotions/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: {
      "currentperiod": {
        "totalnum": 9,
        "posnum": 2, 
        "neunum": 7,
        "mixnum": 0,
        "negnum": 0
      },
      "ringGrowth": {
        "totalgrow": -2,
        "posgrow": -6, 
        "neugrow": 5,
        "mixgrow": -1,
        "neggrow": 0
      },
      "ringRatio": {
        "totalratio": -0.18,
        "posratio": -0.75,
        "neuratio": 2.5,
        "mixratio": "1",
        "negratio": "-"
      }
    }
  })
})

// 文本分析-分析项目
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