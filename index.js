const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const static = require('koa-static');

const app = new Koa();
const router = new Router();
// 静态资源
app.use(static(`${__dirname}/static`))
// 路由
router.get('/', async ctx => {
  ctx.body = await getPage(ctx, '/')
})
router.get('/login', async ctx => {
  ctx.body = await getPage(ctx)
})
app.use(router.routes(), router.allowedMethods())
// 监听端口
app.listen(3000, () => {
  console.log('server is starting on 3000')
})
// 获取路由文件方法
const getPage = ({ path }, from) => {
  let filePath;
  return new Promise((resolve, reject) => {
    from && from === '/' ? filePath = '/index' : filePath = path;
    fs.readFile(__dirname + `/pages/${filePath}.html`, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}