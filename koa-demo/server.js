const Koa = require('koa');
const koaLog = require('./koa-logger');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '齐天大圣孙悟空'
})
router.get('/zhubajie', (ctx, next) => {
    ctx.body = '净坛使者猪八戒'
})

app.use(koaLog)
app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);