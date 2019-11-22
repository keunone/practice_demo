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
    data: {
      total_count: 500,
      page: 1,
      rows: [
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
            "views_msg": [
                {
                    "view_id": "5d4be9d6352a7a7a949e2348",  // 话题id
                    "recordID": "5d4bdcd0352a7aa158a3b864",  // 原话记录id
                    "values": -1,  // 该话题在原话记录上的得分
                    "sentiment": 1,  // 该话题在原话记录上的情感倾向， 0 正向，1 负向， 2 中性，3 混合
                    "content": "生煎"  // 话题名
                },
                 {
                    "view_id": "5d4be9f5352a7a878c00d5f7",
                    "recordID": "5d4bdcd0352a7aa158a3b864",
                    "values": 1,
                    "sentiment": 0,
                    "content": "生煎2"
                },
                {
                    "view_id": "5d4bea14352a7a5b242797ad",
                    "recordID": "5d4bdcd0352a7aa158a3b864",
                    "values": -1,
                    "sentiment": 0,
                    "content": "生煎3"
                }
            ]
        },
        {
            "id": "5d4bdcd0352a7aa158a3b888",
            "content": "小杨生煎在上海算是最有名气了吧.生煎很好吃的!!!这家还算干净吧.店里也蛮大的.还有楼上.现在搬家了,就不大在这买了的!!!这家还算干净吧.店里也蛮大的.还有楼的!!!这家还算干净吧.店里也蛮大的.还有楼的!!!这家还算干净吧.店里也蛮大的.还有楼的!!!这家还算干净吧.店里也蛮大的.还有楼的!!!这家还算干净吧.店里也蛮大的.还有楼",
            "datsrcId": "5d4bd8f743eaab3f24dc7650",
            "anlsprojectID": "5d4bd92743eaab3f24dc7653",
            "sentiscore": 1,
            "recordID": "",
            "senti": 0,
            "recordtime": "2018-08-17 16:26:56",
            "createdDT": "2019-09-03 14:42:26",
            "updatedDT": "2019-09-03 14:42:26",
            "record_flag": 1,
            "views_msg": [
                {
                    "view_id": "5d4be9d6352a7a7a949e2348",
                    "recordID": "5d4bdcd0352a7aa158a3b888",
                    "score": 0,
                    "sentiment": 1,
                    "content": "生煎"
                },
                {
                    "view_id": "5d4be9f5352a7a878c00d5f7",
                    "recordID": "5d4bdcd0352a7aa158a3b888",
                    "score": 1,
                    "sentiment": 1,
                    "content": "生煎2"
                },
                {
                    "view_id": "5d4bea14352a7a5b242797ad",
                    "recordID": "5d4bdcd0352a7aa158a3b888",
                    "score": -1,
                    "sentiment": 1,
                    "content": "生煎3"
                }
            ]
        }
      ]
    }
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
          "id":"1", //关键词id
          "ratio": 0.73,
          "topics": [
            {
              "topic_id":"1", // 话题id
              "name": "话题是", // 话题名
            }
            ,
            {
              "topic_id":"2", // 话题id
              "name": "话题三", // 话题名
            }
          ]
      },
      {
          "keyword": "粉丝",  // 关键词信息
          "relation_topic": false, // 是否关联话题
          "nums": 136, // 提及量
          "ratio": 0.15, // 提及率
          "id":"2", //关键词id
          "topics": []
      },
      {
          "keyword": "鸡翅",
          "id":"2", //关键词id
          "relation_topic": true,
          "nums": 1,
          "ratio": 0.0,
           "topics": [
            {
              "topic_id":"1", // 话题id
              "name": "话题1", // 话题名
            }
            ,
            {
              "topic_id":"2", // 话题id
              "name": "话题2", // 话题名
            }
          ]
      },
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
          "id":"1", // 关键词id
          "relation_topic": true,
          "nums": 653,
          "ratio": 0.73,
          "topics": [
            {
              "topic_id":"2", // 话题id
              "name": "dd", // 话题名
            }
            ,
            {
              "topic_id":"3", // 话题id
              "name": "vdf", // 话题名
            }
          ]
      },
      {
          "keyword": "粉丝",
          "relation_topic": false, // 是否关联话题
          "nums": 136,
          "ratio": 0.15,
          "id":"2",
          "topics": []
      },
      {
          "keyword": "鸡翅",
          "id": "3", // 关键词id
          "relation_topic": true,
          "nums": 1,
          "ratio": 0.0,
          "topics": [
            {
              "topic_id":"5", // 话题id
              "name": "的", // 话题名
              "key_dict": "范德萨", // 话题关键词列表
            }
            ,
            {
              "topic_id":"1", // 话题id
              "name": "的怕", // 话题名
              "key_dict": "测试", // 话题关键词列表
            }
          ]
      },
      {
          "keyword": "辣翅",
          "relation_topic": true,
          "id":"4", // 关键词id
          "nums": 0,
          "ratio": 0.0,
          "topics": [
            {
              "topic_id":"", // 话题id
              "name": "", // 话题名
              "key_dict": "", // 话题关键词列表
            }
            ,
            {
              "topic_id":"", // 话题id
              "name": "", // 话题名
              "key_dict": "", // 话题关键词列表
            }
          ]
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

// 获取话题组信息
server.get('/api/txtanls/topicgroups/', function(req, res, next) {
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data: [
      {
        "topic_id": "5d4be7d8352a7a553cb71545", // 话题组id
        "name": "未分组",  // 话题组名
        "data": [
            {
                "name": "生煎", // 话题名
                "num": 999,  // 话题关联的原话记录数量
                "topic_id": "5d4be9d6352a7a7a949e2348",  // 话题id
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "生煎2",
                "num": 1,
                "topic_id": "5d4be9f5352a7a878c00d5f7",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "生煎3",
                "num": 0,
                "topic_id": "5d4bea14352a7a5b242797ad",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            }
        ]
      },
      {
        "topic_id": "5d4be7d8352a7a553cb71547",
        "name": "卫生",
        "data": [
            {
                "name": "食材",
                "num": 40,
                "topic_id": "5d4bfbd2352a7a4460fcc145",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "食材1",
                "num": 40,
                "topic_id": "5d4bfbd9352a7a721469078a",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "食材2",
                "num": 30,
                "topic_id": "5d4bfbe2352a7a1284ecd3c6",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "环境",
                "num": 30,
                "topic_id": "5d4bfc09352a7a3f7005925c",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "环境1",
                "num": 10,
                "topic_id": "5d4bfc2b352a7a70fc0e381a",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            },
            {
                "name": "环境2",
                "num": 0,
                "topic_id": "5d4bfc34352a7a71681b967a",
                type: 0,
                key_dict: ["关键词1", "关键词2", "关键词3"]
            }
        ]
    }
    ]
  })
})

// 新建话题
server.post('/api/txtanls/topic/', function(req, res, next) {
  const { body } = req
  if (body.name === "重复") {
    respond(req, res, next, {
      code: 5,
      "msg": "话题名称已存在"
    }, 2000)
    return;
  }
  respond(req, res, next, {
    code: 0,
    "data": "5d6a133576aa2c0009d7a85b"
  }, 2000)
})
// 重命名话题
server.put('/api/txtanls/topic/:id', function(req, res, next) {
  const { body } = req
  if (body.name === "重复") {
    respond(req, res, next, {
      code: 5,
      "msg": "话题名称已存在"
    }, 2000)
    return;
  }
  respond(req, res, next, {
    code: 0,
    "data": "5d6a133576aa2c0009d7a85b"
  }, 2000)
})
// 删除话题
server.del('/api/txtanls/topic/:topicgrid', function(req, res, next) {
  respond(req, res, next, {
    "code": 0,
    "data": 1
  })
})

// 分析展示

// 获取图表数据通用接口
server.get('/api/txtanls/charts/', function(req, res, next) {
  const { type, topics_type, topics_group_id, topics_id, view_type, view_group_id, view_id } = req.query
  console.log("type----topics_praise_rate----------:", type, type === "topics_praise_rate");
  let data = null;
  switch(type) {
    // 总体项目情感细分图
    case "project_emotion": 
      data = {
        "currentPeriod": {
          "total": 9,
          "pos": 2, 
          "neu": 7,
          "mix": 0,
          "neg": 0
        },
        "ringGrowth": {
          "total": -2,
          "pos": -6, 
          "neu": 5,
          "mix": -1,
          "neg": 0
        },
        "ringRatio": {
          "total": -0.18,
          "pos": -0.75,
          "neu": 2.5,
          "mix": "1",
          "neg": "-"
        },
        "current_time": "2019-11-05",
        "last_time": "2019-11-05"
      }
      break;
    // 总体项目情感趋势图
    case "project_emotion_trend": 
      data = [
        {
            "total": 27,
            "pos": 15,
            "neu": 11,
            "mix": 1,
            "neg": 0,
            "time": "2019-03-06"
        },
        {
            "total": 24,
            "pos": 12,
            "neu": 12,
            "mix": 0,
            "neg": 0,
            "time": "2019-02-23"
        },
        {
            "total": 24,
            "pos": 12,
            "neu": 12,
            "mix": 0,
            "neg": 0,
            "time": "2019-02-15"
        },
        {
            "total": 24,
            "pos": 12,
            "neu": 15,
            "mix": 32,
            "neg": 0,
            "time": "2019-02-12"
        },
        {
            "total": 24,
            "pos": 12,
            "neu": 12,
            "mix": 12,
            "neg": 21,
            "time": "2019-02-11"
        },
        {
            "total": 24,
            "pos": 12,
            "neu": 25,
            "mix": 32,
            "neg": 0,
            "time": "2019-02-10"
        },
        {
            "total": 34,
            "pos": 52,
            "neu": 12,
            "mix": 5,
            "neg": 4,
            "time": "2019-02-09"
        },
        {
            "total": 23,
            "pos": 13,
            "neu": 14,
            "mix": 4,
            "neg": 6,
            "time": "2019-02-08"
        },
      ]
      break;
    // 观点统计
    case "view_statistics": 
      data = [
        {
          id: 1,
          name: "王小虎",
          total_num: 9,
          total_ratio: 0.9,
          pos_num: 27,
          neg_num: 72,
          neu_num: 61,
          pos_ratio: 33,
          neg_ratio: 40,
          neu_ratio: 51,
          topic: [
            {
              id: 11,
              name: "王小虎",
              total_num: 3,
              total_ratio: 0.3,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 3,
              neg_ratio: 10,
              neu_ratio: 5,
            },
            {
              id: 12,
              name: "王小虎",
              total_num: 5,
              total_ratio: 0.1,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 3,
              neg_ratio: 10,
              neu_ratio: 5
            }
          ]
        },
        {
          id: 2,
          name: "王小虎",
          total_num: 4,
          total_ratio: 0.8,
          pos_num: 24,
          neg_num: 37,
          neu_num: 26,
          pos_ratio: 10,
          neg_ratio: 20,
          neu_ratio: 50,
          mixratio: 40,
          topic: [
            {
              id: 21,
              topicname: "",
              name: "话题1",
              total_num: 33,
              total_ratio: 0.8,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 3,
              neg_ratio: 10,
              neu_ratio: 5,
              mixratio: 4
            },
            {
              id: 22,
              topicname: "",
              name: "话题2",
              total_num: 45,
              total_ratio: 0.2,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 3,
              neg_ratio: 10,
              neu_ratio: 5,
              mixratio: 4
            }
          ]
        },
        {
          id: 3,
          topicgrname: "",
          name: "话题组3",
          total_num: 3,
          total_ratio: 0.9,
          pos_num: 2,
          neg_num: 7,
          neu_num: 6,
          pos_ratio: 23,
          neg_ratio: 10,
          neu_ratio: 5,
          mixratio: 4,
          topic: [
            {
              id: 31,
              topicname: "",
              name: "话题1",
              total_num: 100,
              total_ratio: 0.6,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 6,
              neg_ratio: 10,
              neu_ratio: 5,
              mixratio: 4
            },
            {
              id: 32,
              topicname: "",
              name: "话题2",
              total_num: 103,
              total_ratio: 0.1,
              pos_num: 2,
              neg_num: 7,
              neu_num: 6,
              pos_ratio: 3,
              neg_ratio: 10,
              neu_ratio: 5,
              mixratio: 4
            }
          ]
        }
      ]
      break;
    // 话题提及率变化图
    case "topics_reference_rate": 
      if(topics_group_id) { // 话题组下的话题数据
        data = {
          list: [
            {
                "current_ratio": 0.94,
                "last_ratio": 0.62,
                "rowth": 0.32,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子1"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "growth": 0.12,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子2"
            },
            {
                "current_ratio": 0.44,
                "last_ratio": 0.22,
                "growth": 0.11,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子3"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "growth": 0.52,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子4"
            },
            {
                "current_ratio": 0.24,
                "last_ratio": 0.34,
                "growth": -0.09999999999999998,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "单个饺子4"
            },
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        } 
      } else if(topics_type === "topics") { // 所有话题数据
        data = {
          list: [
            {
                "current_ratio": 0.94,
                "last_ratio": 0.62,
                "growth": 0.32,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子1"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "growth": 0.12,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子2"
            },
            {
                "current_ratio": 0.44,
                "last_ratio": 0.22,
                "growth": 0.11,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子3"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "growth": 0.52,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子4"
            },
            {
                "current_ratio": 0.24,
                "last_ratio": 0.34,
                "growth": -0.09999999999999998,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "饺子4"
            },
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        }
      } else if(topics_type === "topics_group") { // 所有话题组数据
        data = {
          list: [
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "growth": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "话题组01"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "growth": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "话题组3"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "growth": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎3"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "growth": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎4"
            },
            {
                "current_ratio": 0.87,
                "last_ratio": 0.32,
                "growth": 0.27,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎5"
            },
            {
                "current_ratio": 0.87,
                "last_ratio": 0.91,
                "growth": 0.87,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎6"
            },
            {
                "current_ratio": 0.76,
                "last_ratio": 0.32,
                "growth": 0.27,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎7"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.72,
                "growth": 0.3,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎8"
            },
            {
                "current_ratio": 0.15,
                "last_ratio": 0.28,
                "growth": 0.46,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "v生煎9"
            }
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        }
      }
      break;
    // 话题提及率变化趋势图
    case "topics_reference_trend": 
      if(topics_id) {
        data = [
          {
              "ratio": "0.64",
              "time": "2019-02-04"
          },
          {
              "ratio": "0.18",
              "time": "2019-02-03"
          },
          {
              "ratio": "0.36",
              "time": "2019-02-02"
          },
          {
              "ratio": "0.26",
              "time": "2019-02-01"
          },
          {
              "ratio": "0.24",
              "time": "2019-01-30"
          }
        ]
      }
      if(topics_group_id) {
        data = [
          {
              "ratio": "0.64",
              "time": "2019-11-04"
          },
          {
              "ratio": "0.18",
              "time": "2019-11-03"
          },
          {
              "ratio": "0.36",
              "time": "2019-11-02"
          },
          {
              "ratio": "0.26",
              "time": "2019-11-01"
          },
          {
              "ratio": "0.24",
              "time": "2019-11-30"
          }
        ]
      }
      break;
    // 观点评价
    case "view_evaluate": 
      if(view_group_id) { // 话题组下的话题数据
        data = {
          list: [
            {
                "current_ratio": 0.94,
                "last_ratio": 0.62,
                "differ_ratio": 0.32,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子1"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "differ_ratio": 0.12,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子2"
            },
            {
                "current_ratio": 0.44,
                "last_ratio": 0.22,
                "differ_ratio": 0.11,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子3"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "differ_ratio": 0.52,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "单个饺子4"
            },
            {
                "current_ratio": 0.24,
                "last_ratio": 0.34,
                "differ_ratio": -0.09999999999999998,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "单个饺子4"
            },
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        } 
      } else if(view_type === "view") { // 所有话题数据
        data = {
          list: [
            {
                "current_ratio": 0.94,
                "last_ratio": 0.62,
                "differ_ratio": 0.32,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子1"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "differ_ratio": 0.12,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子2"
            },
            {
                "current_ratio": 0.44,
                "last_ratio": 0.22,
                "differ_ratio": 0.11,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子3"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.52,
                "differ_ratio": 0.52,
                "id": "5d4be9d6352a7a7a949e2348",
                "name": "饺子4"
            },
            {
                "current_ratio": 0.24,
                "last_ratio": 0.34,
                "differ_ratio": -0.09999999999999998,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "饺子4"
            },
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        }
      } else if(view_type === "view_group") { // 所有话题组数据
        data = {
          list: [
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "differ_ratio": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "话题组01"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "differ_ratio": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "话题组3"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "differ_ratio": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎3"
            },
            {
                "current_ratio": 1,
                "last_ratio": 0.92,
                "differ_ratio": 0.07,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎4"
            },
            {
                "current_ratio": 0.87,
                "last_ratio": 0.32,
                "differ_ratio": 0.27,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎5"
            },
            {
                "current_ratio": 0.87,
                "last_ratio": 0.91,
                "differ_ratio": 0.87,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎6"
            },
            {
                "current_ratio": 0.76,
                "last_ratio": 0.32,
                "differ_ratio": 0.27,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎7"
            },
            {
                "current_ratio": 0.64,
                "last_ratio": 0.72,
                "differ_ratio": 0.3,
                "id": "5d4be7d8352a7a553cb71545",
                "name": "组生煎8"
            },
            {
                "current_ratio": 0.15,
                "last_ratio": 0.28,
                "differ_ratio": 0.46,
                "id": "5d4be9f5352a7a878c00d5f7",
                "name": "v生煎9"
            }
          ],
          current_time: "2019-11-7",
          last_time: "2019-11-7"
        }
      }
      break;
    // 观点情感柱状图
    case "view_emotion": 
      if(view_id) {
        data = [
          {
            pos: 3,
            neg: 6,
            neu: 0,
            time: "2019-02-05"
          },
          {
            pos: 3,
            neg: 4,
            neu: 3,
            time: "2019-01-30"
          },
          {
            pos: 3,
            neg: 6,
            neu: 0,
            time: "2019-01-29"
          },
          {
            pos: 3,
            neg: 4,
            neu: 3,
            time: "2019-01-28"
          }
        ]
      }
      if(view_group_id) {
        data = [
          {
            pos: 3,
            neg: 6,
            neu: 0,
            time: "2019-11-05"
          },
          {
            pos: 3,
            neg: 4,
            neu: 3,
            time: "2019-11-06"
          },
          {
            pos: 3,
            neg: 6,
            neu: 0,
            time: "2019-11-07"
          },
          {
            pos: 3,
            neg: 4,
            neu: 3,
            time: "2019-11-08"
          }
        ]
      }
      break;
    // 词云图
    case "wordclouds": 
      data = [
        {
          keyword: "十九大精神",
          rate: 3000
        },
        {
          keyword: "两学一做",
          rate: 10081
        },
        {
          keyword: "中华民族",
          rate: 9386
        },
        {
          keyword: "马克思主义",
          rate: 7500
        },
        {
          keyword: "民族复兴",
          rate: 7500
        },
        {
          keyword: "社会主义制度",
          rate: 6500
        },
        {
          keyword: "国防白皮书",
          rate: 6500
        },
        {
          keyword: "创新",
          rate: 6000
        },
        {
          keyword: "民主革命",
          rate: 4500
        },
        {
          keyword: "文化强国",
          rate: 3800
        },
        {
          keyword: "国家主权",
          rate: 3000
        },
        {
          keyword: "武装颠覆",
          rate: 2500
        },
        {
          keyword: "领土完整",
          rate: 2300
        },
        {
          keyword: "安全",
          rate: 2000
        },
        {
          keyword: "从严治党",
          rate: 1900
        },
        {
          keyword: "现代化经济体系",
          rate: 1800
        },
        {
          keyword: "国防动员",
          rate: 1700
        },
        {
          keyword: "信息化战争",
          rate: 1600
        },
        {
          keyword: "局部战争",
          rate: 1500
        },
        {
          keyword: "教育",
          rate: 1200
        },
        {
          keyword: "职业教育",
          rate: 1100
        },
        {
          keyword: "兵法",
          rate: 900
        },
        {
          keyword: "一国两制1",
          rate: 800
        },
        {
          keyword: "一国两制21",
          rate: 800
        },
        {
          keyword: "一国两制2",
          rate: 800
        },
        {
          keyword: "一国两制3",
          rate: 700
        },
        {
          keyword: "一国两制4",
          rate: 500
        },
        {
          keyword: "一国两制6",
          rate: 300
        },
        {
          keyword: "特色社会主义思想",
          rate: 100
        }
      ];
      break;
    // 话题关联分析图
    case "topics_relations": 
      data = [
        {
          "relationtopics": [
              {
                  "topicname":"话题一", // 话题名
                  "topicId": 2 // 话题Id
              },
              {
                  "topicname":"话题二",
                  "topicId": 2
              }
          ],
          "ratio": 80 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题三", // 话题名
                  "topicId": 3 // 话题Id
              },
              {
                  "topicname":"话题四",
                  "topicId": 4
              }
          ],
          "ratio": 40 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题五", // 话题名
                  "topicId": 5 // 话题Id
              },
              {
                  "topicname":"话题六",
                  "topicId": 6
              }
          ],
          "ratio": 60 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题七", // 话题名
                  "topicId": 7 // 话题Id
              },
              {
                  "topicname":"话题八",
                  "topicId": 8
              }
          ],
          "ratio": 80 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题九", // 话题名
                  "topicId": 9 // 话题Id
              },
              {
                  "topicname":"话题十",
                  "topicId": 10
              }
          ],
          "ratio": 68 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题十一", // 话题名
                  "topicId": 11 // 话题Id
              },
              {
                  "topicname":"话题十二",
                  "topicId": 12
              }
          ],
          "ratio": 88 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题十三", // 话题名
                  "topicId": 21 // 话题Id
              },
              {
                  "topicname":"话题二四",
                  "topicId": 24
              }
          ],
          "ratio": 80 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题一六", // 话题名
                  "topicId": 16 // 话题Id
              },
              {
                  "topicname":"话题二六",
                  "topicId": 26
              }
          ],
          "ratio": 50 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题一", // 话题名
                  "topicId": 2 // 话题Id
              },
              {
                  "topicname":"话题二",
                  "topicId": 2
              }
          ],
          "ratio": 70 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题一", // 话题名
                  "topicId": 2 // 话题Id
              },
              {
                  "topicname":"话题二",
                  "topicId": 2
              }
          ],
          "ratio": 87 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题一", // 话题名
                  "topicId": 2 // 话题Id
              },
              {
                  "topicname":"话题二",
                  "topicId": 2
              }
          ],
          "ratio": 86 // 关联的话题占用比率
        },
        {
          "relationtopics": [
              {
                  "topicname":"话题一", // 话题名
                  "topicId": 2 // 话题Id
              },
              {
                  "topicname":"话题二",
                  "topicId": 2
              }
          ],
          "ratio": 89 // 关联的话题占用比率
        },
        {
            "relationtopics":[
                {
                    "topicname": "话题三",
                    "topicId": 3
                },
                {
                  "topicname": "话题四",
                  "topicId": 4
                }
            ],
            "ratio": 49
        }
      ]
      break;
  }
  respond(req, res, next, {
    code: 0,
    status_code: 200,
    data
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