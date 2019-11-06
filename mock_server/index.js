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

//  根据关键词函数获取原话记录
server.get('/api/txtanls/record/search/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "id": "5d4bdcd0352a7aa158a3b864", // 原话记录id
          "content": "小杨生煎的生煎和各分店的都差不多吧.千张和油豆腐牛肉都好吃,适合早中晚3餐",
          "datsrcId": "5d4bd8f743eaab3f24dc7650", // 数据源id
          "anlsprojectID": "5d4bd92743eaab3f24dc7653",  // 项目id
          "sentiscore": 5, // 得分
          "senti": 0, // 情感倾向，0 正向，1 负向， 2 中性，3 混合
          "recordtime": "2019-04-17 16:26:56",  // 原话记录时间
          "createdDT": "2019-09-03 14:42:26",
          "updatedDT": "2019-09-03 14:42:26",
          "record_flag": 1,
          "topic_msg": [
              {
                  "topicID": "5d4be9d6352a7a7a949e2348",  // 话题id
                  "recordID": "5d4bdcd0352a7aa158a3b864",  // 原话记录id
                  "score": -4,  // 该话题在原话记录上的得分
                  "sentiment": 1,  // 该话题在原话记录上的情感倾向， 0 正向，1 负向， 2 中性，3 混合
                  "name": "生煎",  // 话题名
                  "logicexp": "生煎 or 粉丝",  // 话题的逻辑表达式
                  "tgroupid":"5d4be7d8352a7a553cb71545"  // 所属话题组id
              },
               {
                  "topicID": "5d4be9f5352a7a878c00d5f7",
                  "recordID": "5d4bdcd0352a7aa158a3b864",
                  "score": 4,
                  "sentiment": 0,
                  "name": "生煎2",
                  "logicexp": "小杨生煎 or 阿三生煎",
                  "tgroupid": "5d4be7d8352a7a553cb71545"
              },
              {
                  "topicID": "5d4bea14352a7a5b242797ad",
                  "recordID": "5d4bdcd0352a7aa158a3b864",
                  "score": 2,
                  "sentiment": 0,
                  "name": "生煎3",
                  "logicexp": "小杨生煎 and (not 阿三生煎)",
                  "tgroupid": "5d4be7d8352a7a553cb71545"
              }
          ]
      },
      {
          "id": "5d4bdcd0352a7aa158a3b888",
          "content": "小杨生煎在上海算是最有名气了吧.生煎很好吃的!!!这家还算干净吧.店里也蛮大的.还有楼上.现在搬家了,就不大在这买了.........",
          "datsrcId": "5d4bd8f743eaab3f24dc7650",
          "anlsprojectID": "5d4bd92743eaab3f24dc7653",
          "sentiscore": 1,
          "recordID": "",
          "senti": 0,
          "recordtime": "2018-08-17 16:26:56",
          "createdDT": "2019-09-03 14:42:26",
          "updatedDT": "2019-09-03 14:42:26",
          "record_flag": 1,
          "topic_msg": [
              {
                  "topicID": "5d4be9d6352a7a7a949e2348",
                  "recordID": "5d4bdcd0352a7aa158a3b888",
                  "score": -1,
                  "sentiment": 1,
                  "name": "生煎",
                  "logicexp": "生煎 or 粉丝", 
                  "tgroupid":""  
              },
              {
                  "topicID": "5d4be9f5352a7a878c00d5f7",
                  "recordID": "5d4bdcd0352a7aa158a3b888",
                  "score": -7,
                  "sentiment": 1,
                  "name": "生煎2",
                  "logicexp": "生煎 or 粉丝", 
                  "tgroupid":"" 
              },
              {
                  "topicID": "5d4bea14352a7a5b242797ad",
                  "recordID": "5d4bdcd0352a7aa158a3b888",
                  "score": -3,
                  "sentiment": 1,
                  "name": "生煎3",
                  "logicexp": "生煎 or 粉丝",
                  "tgroupid":"" 
              }
          ]
      }
    ]
  })
})
// 获取未屏蔽关键词的提及量、提及率
server.get('/api/txtanls/keywords/activeinfo/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "keyword": "生煎",
          "relation_topic": true,
          "nums": 653,
          "ratio": 0.73
      },
      {
          "keyword": "粉丝",  // 关键词信息
          "relation_topic": false, // 是否关联话题
          "nums": 136, // 提及量
          "ratio": 0.15 // 提及率
      },
      {
          "keyword": "鸡翅",
          "relation_topic": true,
          "nums": 1,
          "ratio": 0.0
      },
      {
          "keyword": "辣翅",
          "relation_topic": true,
          "nums": 4,
          "ratio": 0.5
      }
    ]
  })
})
// 获取屏蔽关键词的提及量、提及率
server.get('/api/txtanls/keywords/inactiveinfo/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
          "keyword": "生煎",
          "relation_topic": true,
          "nums": 653,
          "ratio": 0.73
      },
      {
          "keyword": "粉丝",
          "relation_topic": false, // 是否关联话题
          "nums": 136,
          "ratio": 0.15
      },
      {
          "keyword": "鸡翅",
          "relation_topic": true,
          "nums": 1,
          "ratio": 0.6
      },
      {
          "keyword": "辣翅",
          "relation_topic": true,
          "nums": 2,
          "ratio": 0.2
      }
    ]
  })
})

// 屏蔽关键词或者取消屏蔽关键词
server.put('/api/txtanls/keywords/status/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d6a209f76aa2c000bbce17e"
  }, 2000)
})

// 新建话题
server.post('/api/txtanls/topics/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d6a133576aa2c0009d7a85b"
  }, 2000)
})
// 新建话题组
server.post('/api/txtanls/topicgroups/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d6a133576aa2c0009d7a85b"
  }, 2000)
})

// 更新话题函数
server.put('/api/txtanls/topics/keyword/:id/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    "data": "5d6a209f76aa2c000bbce17e"
  }, 2000)
})

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
                "topic_id": "5d4be9d6352a7a7a949e2348",  // 话题id
                "logic_expression": "小杨生煎 or 阿三生煎"
            },
            {
                "name": "生煎2",
                "num": 1,
                "topic_id": "5d4be9f5352a7a878c00d5f7",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "生煎3",
                "num": 0,
                "topic_id": "5d4bea14352a7a5b242797ad",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
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
                "topic_id": "5d4bfbd2352a7a4460fcc145",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "食材1",
                "num": 40,
                "topic_id": "5d4bfbd9352a7a721469078a",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "食材2",
                "num": 30,
                "topic_id": "5d4bfbe2352a7a1284ecd3c6",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "环境",
                "num": 30,
                "topic_id": "5d4bfc09352a7a3f7005925c",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "环境1",
                "num": 10,
                "topic_id": "5d4bfc2b352a7a70fc0e381a",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
            },
            {
                "name": "环境2",
                "num": 0,
                "topic_id": "5d4bfc34352a7a71681b967a",
                "logic_expression": "小杨生煎 and (not 阿三生煎)"
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


// 分析展示

// 获取图表数据通用接口
server.get('/api/txtanls/charts/', function(req, res, next) {
  const { type } = req.query
  let data = null;
  switch(type) {
    // 总体项目情感细分图
    case "project_emotion": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 总体项目情感趋势图
    case "project_emotion_trend": 
      data = [
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
      break;
    // 话题情感看板图
    case "topics_emotion": 
      data = [
        {
          id: 1,
          topicgrname: "话题组1",
          name: "王小虎",
          totalnum: 9,
          total_ratio: 0.9,
          posnum: 27,
          negnum: 72,
          neunum: 61,
          mixnum: 57,
          posratio: 13,
          negratio: 40,
          neuratio: 51,
          mixratio: 34,
          topic: [
            {
              id: 11,
              topicname: "话题1",
              name: "王小虎",
              totalnum: 3,
              total_ratio: 0.3,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            },
            {
              id: 12,
              topicname: "话题2",
              name: "王小虎",
              totalnum: 5,
              total_ratio: 0.1,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            }
          ]
        },
        {
          id: 2,
          topicgrname: "话题组2",
          name: "王小虎",
          totalnum: 4,
          total_ratio: 0.8,
          posnum: 24,
          negnum: 37,
          neunum: 26,
          mixnum: 42,
          posratio: 30,
          negratio: 20,
          neuratio: 50,
          mixratio: 40,
          topic: [
            {
              id: 21,
              topicname: "话题1",
              name: "王小虎",
              totalnum: 33,
              total_ratio: 0.8,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            },
            {
              id: 22,
              topicname: "话题2",
              name: "王小虎",
              totalnum: 45,
              total_ratio: 0.2,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            }
          ]
        },
        {
          id: 3,
          topicgrname: "话题组3",
          name: "王小虎",
          totalnum: 3,
          total_ratio: 0.9,
          posnum: 2,
          negnum: 7,
          neunum: 6,
          mixnum: 3,
          posratio: 3,
          negratio: 10,
          neuratio: 5,
          mixratio: 4,
          topic: [
            {
              id: 31,
              topicname: "话题1",
              name: "王小虎",
              totalnum: 100,
              total_ratio: 0.6,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            },
            {
              id: 32,
              topicname: "话题2",
              name: "王小虎",
              totalnum: 103,
              total_ratio: 0.1,
              posnum: 2,
              negnum: 7,
              neunum: 6,
              mixnum: 3,
              posratio: 3,
              negratio: 10,
              neuratio: 5,
              mixratio: 4
            }
          ]
        }
      ]
      break;
    // 话题提及率变化图
    case "topics_reference_rate": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 话题提及率变化趋势图
    case "topics_reference_trend": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 话题好评率变化图
    case "topics_praise_rate": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 话题好评率变化趋势图
    case "topics_praise_trend": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 词云图
    case "wordclouds": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
    // 话题关联分析图
    case "topics_relations": 
      data = {
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
        },
        "nowpreiod_time": "2019-11-05",
        "uppreiod_time": "2019-11-05"
      }
      break;
  }
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data
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


// 文本分析-分析项目
server.get('/api/txtanls/projects/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: {
      "total_count": 2, //数据总数
      "rows": [
        {
          "id": "5dc10ede76aa2c00096fbeb2", // 项目id
          "name": "项目名称", //项目名称
          "creator": "5cf20fb9e31a3c0c8195c2f2",
          "status": 0,
          "org_id": "5cf20fb9e31a3c0c8195c2d7",
          "record_flag": 0,
          "table_id": "5d14a30eaace700009e76d80", // 表id
          "table_name": "上传文件", // 表名
          "textfieldList": [
            {
              "id":"5d14a30eaace700009e76d81", // 字段id
              "value": "some value" // 字段名
            }
          ], // 文本字段信息
          "timefield_id": "", // 时间字段id，空表示没有
          "timefield_name": "", // 时间字段名称，空表示没有
          "createdID": null,
          "createdDT": "2019-11-05 13:55:42",
          "updatedID": null,
          "updatedDT": "2019-11-05 13:55:42"
        },
        {
          "id": "5dc111e476aa2c0009e8f38c",
          "name": "项目名称1",
          "creator": "5cf20fb9e31a3c0c8195c2f2",
          "status": 0,
          "org_id": "5cf20fb9e31a3c0c8195c2d7",
          "record_flag": 0,
          "table_id": "5d14a30eaace700009e76d80",
          "table_name": "上传文件",
          "textfieldList": [
            {
              "id": "5d14a30eaace700009e76d81",
              "value": "some value"
            }
          ],
          "timefield_id": "",
          "timefield_name": "",
          "createdID": null,
          "createdDT": "2019-11-05 14:08:36",
          "updatedID": null,
          "updatedDT": "2019-11-05 14:08:36"
        }
      ],
    "page": 1 // 页码 
    }
  })
})

// 分析项目详情
server.get('/api/txtanls/anlsprojects/:id', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: {
      "id": "5dc111e476aa2c0009e8f38c",
      "name": "项目名称1",
      "creator": "5cf20fb9e31a3c0c8195c2f2",
      "status": 0,
      "org_id": "5cf20fb9e31a3c0c8195c2d7",
      "record_flag": 0,
      "table_id": "5d14a30eaace700009e76d80",
      "table_name": "上传文件",
      "textfieldList": [
          {
            "id": "5d14a30eaace700009e76d81",
            "value": "some value"
           },
          {
            "id": "5d14a30eaace7009e76d81",
            "value": "some value1"
           }
      ],
      "timefield_id": "",
      "timefield_name": "",
      "createdID": null,
      "createdDT": "2019-11-05 14:08:36",
      "updatedID": null,
      "updatedDT": "2019-11-05 14:08:36"
    }
  })
})
// 新建项目
server.post('/api/txtanls/projects/', function(req, res, next) {
  const { body } = req
  if (body.name === "重复") {
    respond(req, res, next, {
      code: 5,
      "msg": "项目名称已存在"
    }, 2000)
    return;
  }
  respond(req, res, next, {
    code: 0,
    data: {
      "id": "5dc10ede76aa2c00096fbeb2",
      "name": "新增项目名称",
      "creator": "5cf20fb9e31a3c0c8195c2f2",
      "status": 1,
      "org_id": "5cf20fb9e31a3c0c8195c2d7",
      "record_flag": 1,
      "table_id": "5d14a30eaace700009e76d80",
      "table_name": "上传文件",
      "textfieldList": [
          {
              "id":"5d14a30eaace700009e76d81",
              "value": "some value"
          }
      ],
      "timefield_id": "5dbfbb398e1f3bd200c28ac2",
      "timefield_name": "时间字段1",
      "createdID": null,
      "createdDT": "2019-11-05 13:55:42",
      "updatedID": null,
      "updatedDT": "2019-11-05 16:56:51"
    }
  }, 2000)
})
// 更新项目
server.put('/api/txtanls/projects/:id', function(req, res, next) {
  const { body } = req
  if (body.name === "重复") {
    respond(req, res, next, {
      code: 5,
      "msg": "项目名称已存在"
    }, 2000)
    return;
  }
  respond(req, res, next, {
    code: 0,
    data: {
      "id": "5dc10ede76aa2c00096fbeb2",
      "name": "更新项目名称2",
      "creator": "5cf20fb9e31a3c0c8195c2f2",
      "status": 1,
      "org_id": "5cf20fb9e31a3c0c8195c2d7",
      "record_flag": 1,
      "table_id": "5d14a30eaace700009e76d80",
      "table_name": "上传文件",
      "textfieldList": [
          {
              "id":"5d14a30eaace700009e76d81",
              "value": "some value"
          }
      ],
      "timefield_id": "5dbfbb398e1f3bd200c28ac2",
      "timefield_name": "时间字段1",
      "createdID": null,
      "createdDT": "2019-11-05 13:55:42",
      "updatedID": null,
      "updatedDT": "2019-11-05 16:56:51"
    }
  }, 2000)
})
// 删除项目
server.del('/api/txtanls/projects/:id', function(req, res, next) {
  respond(req, res, next, {
    "code": 0,
    "data": 1 // 删除个数
  }, 1500)
})

// 数据源
server.get('/api/txtanls/worktables/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    data: [
      {
          "worktable_id": "5d14a30eaace700009e76d80", // 表id
          "worktable_name": "表名1", // 表名
          "text_fields": [
              {
                  "column_id": "5d14a30eaace700009e76d81", // 字段id
                  "column_name": "value", // 字段名
                  "column_type": 4 // 字段类型,参考数值
              }
          ], // 文本字段
          "time_fields": [
              {
                  "column_id": "5dbfbb398e1f3bd200c28ac2",
                  "column_name": "时间字段1",
                  "column_type": 5
              }
          ]
      }, // 时间字段
      {
          "worktable_id": "5d19a310aace70000a497729",
          "worktable_name": "表名2",
          "text_fields": [
              {
                  "column_id": "5dbfbc0d8e1f3bd200c28aca",
                  "column_name": "text",
                  "column_type": 4
              }
          ],
          "time_fields": [
              {
                  "column_id": "5dbfbbc88e1f3bd200c28ac7",
                  "column_name": "datetime",
                  "column_type": 5
              }
          ]
      }
    ]
  })
})
// 分析文本字段
server.get('/api/txtanls/worktables/:id', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    data: [
      {
        "worktable_id": "5d14a30eaace700009e76d80",
        "worktable_name": "上传文件",
        "text_fields": [
            {
                "column_id": "5d14a30eaace700009e76d81",
                "column_name": "value",
                "column_type": 4
            },
            {
                "column_id": "5d14a30eaace700009e76d82",
                "column_name": "列名",
                "column_type": 4
            }
        ],
        "time_fields": [
            {
                "column_id": "5dbfbb398e1f3bd200c28a1",
                "column_name": "时间字段1",
                "column_type": 5
            },
            {
                "column_id": "5dbfbb398e1f3bd200c28a2",
                "column_name": "时间字段2",
                "column_type": 5
            }
        ]
      }
    ]
  })
})

server.listen(7999, function() {
  console.log('%s listening at %s', server.name, server.url);
});