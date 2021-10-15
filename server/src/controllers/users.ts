import Router from 'koa-router';
import { createUser } from 'services/user';

const router = new Router();

router.post('/users', async (ctx) => {
  const { username, password } = ctx.request.body || {};
  const user = await createUser({ username, password });
  ctx.body = { id: user.id };
})

export default router;