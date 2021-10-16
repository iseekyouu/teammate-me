import Koa from 'koa';
import Router from 'koa-router';
import authenticate from 'lib/authenticate';
import { createUser } from 'services/user';

const router = new Router();

router
  .post('/users', async (ctx) => {
    const { username, password } = ctx.request.body || {};
    const user = await createUser({ username, password });
    ctx.body = { id: user.id };
  })
  .use(authenticate)
  .get('/users/me', async (ctx: Koa.Context) => {
    const { user } = ctx;
    ctx.body = user;
  });

export default router;
