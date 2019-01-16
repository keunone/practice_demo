# koa2学习
## 一、安装
1、创建文件夹  
```
创建项目文件夹
mkdir koa-demo

进入项目
cd koa-demo

初始化package.json
npm init

安装koa2 
npm install koa
```
2、创建index.js文件
```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'hello koa'
})

app.listen(3000)
```
3、启动index.js文件
```
node index.js
```
4、在浏览器中输入localhost:3000   
页面显示"hello koa"
## 源码简介及地址
1、源码简介
```
├── lib
│   ├── application.js   // koa2 的入口文件
│   ├── context.js   // 处理上下文
│   ├── request.js   // 处理http请求
│   └── response.js  //处理http响应
└── package.json
```
koa2核心代码就是lib下的四个文件，
