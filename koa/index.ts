import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
const PORT = 5000;

router.get('/api', async (ctx) => {
  const response = { message: `Hi ${ctx.query.name} from koa` };
  ctx.body = response;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () =>
  console.log(`koa server running on http://localhost:${PORT}`)
);
