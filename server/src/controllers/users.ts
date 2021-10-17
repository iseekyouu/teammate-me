import { DEFAULT_SUCCESS_RESPONSE } from 'lib/constants';
import assert from 'http-assert';
import Koa from 'koa';
import Router from 'koa-router';
import authenticate from 'lib/authenticate';
import { createUser, getUserById, updateUser } from 'services/user';

const router = new Router();

router
  .post('/users', async (ctx) => {
    const {
      username, password, team, role,
    } = ctx.request.body;
    const user = await createUser({
      username, password, team, role,
    });

    ctx.body = { id: user.id };
  })
  .use(authenticate)
  .get('/users/me', async (ctx: Koa.Context) => {
    const { user } = ctx;
    ctx.body = await getUserById(user.id);
  })
  .patch('/users/me', async (ctx: Koa.Context) => {
    const { user } = ctx;
    const { team, role } = ctx.request.body;
    assert(team || role, 400, 'empty body');
    await updateUser(user.id, { team, role });
    ctx.body = DEFAULT_SUCCESS_RESPONSE;
  });

export default router;
