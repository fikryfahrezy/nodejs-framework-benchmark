const Koa = require('koa');
const Router = require('koa-router');

function koaStart() {
  const app = new Koa();
  const router = new Router();

  router.get('/api', (ctx, next) => {
    ctx.body = `Hi ${ctx.query.name} from koa`;
  });

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(5000, () => console.log('koa running in 5000'));
}

export default koaStart;
