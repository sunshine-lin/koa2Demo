const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const static = require('koa-static');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('koa-bodyparser');


const app = new Koa();
const router = new Router();
app.use(bodyParser())
// 静态资源
app.use(static(`${__dirname}/static`))
// 路由
router.get('/', async ctx => {
  ctx.body = await getPage(ctx, '/')
})
router.get('/login', async ctx => {
  ctx.body = await getPage(ctx)
})
router.get('/register', async ctx => {
  ctx.body = await getPage(ctx)
})
router.post('/registeruser', async ctx => {
  var flag = await checkUser(ctx.request.body)
  if (flag) {
    var res = await register(ctx.request.body)
    if (res.result.ok === 1) {
      ctx.body = { code: 200 }
    } else {
      ctx.body = { code: 300 }
    }
  } else {
    ctx.body = { code: 300 }
  }
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
function checkUser(params) {
  var url = "mongodb://localhost:27017/koa2demo";
  return new Promise((reslove, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) {
        reject(err);
      } else {
        var dbo = db.db("koa2demo");
        dbo.collection("users").find().toArray(function (err, result) { // 返回集合中所有数据
          if (err) throw err;
          console.log('result', result);
          result.some(item => {
            if (item.name === params.name) {
              reslove(false)
            }
          })
          reslove(true)
          db.close();
        });
      }
      db.close();
    });
  })
}
function register(params) {
  var url = "mongodb://localhost:27017/koa2demo";
  return new Promise((reslove, reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) {
        reject(err);
      } else {
        var dbo = db.db("koa2demo");
        dbo.collection("users").insert(params, function (err, res) { // 返回集合中所有数据
          if (err) throw err;
          reslove(res)
        });
      }
      db.close();
    });
  })
}

