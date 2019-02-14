const Koa = require('koa');

const controller = require('./middleware/controller');
const rest = require('./middleware/rest');
const cors = require('koa2-cors');
const router = require('koa-router')();
const koaBody = require('koa-body');
const koajwt = require('koa-jwt');
const tokenConfig = require('./utils/token-config')
const app = new Koa();
app.use(cors());



// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

let staticFiles = require('./middleware/static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// token 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
      if(err.status === 401){
          ctx.status = 401;
          ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
  })
})

// app.use(koajwt({
//   secret: tokenConfig.secretKey
// }).unless({
//   path: tokenConfig.unlessPath
// }));

router.post('/users', koaBody(),
  (ctx) => {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
  }
);
app.use(rest.restify());
app.use(router.routes());
app.use(controller());


app.listen(3000);

console.log('app started at port 3000...');










