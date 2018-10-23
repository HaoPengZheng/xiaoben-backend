const Koa = require('koa');

const controller = require('./middleware/controller');
const rest = require('./middleware/rest');
var cors = require('koa2-cors');

const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');
 


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

let staticFiles = require('./middleware/static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

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
app.use(cors()); 
app.listen(3000);

console.log('app started at port 3000...');










