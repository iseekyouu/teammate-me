import Koa from 'koa';
import authenticate from 'lib/authenticate';
import Router from 'koa-router';
import { createTeam } from 'services/team';

const router = new Router();

router
  .use(authenticate)
  .post('/teams', async (ctx: Koa.Context) => {
    const {
      name,
    } = ctx.request.body;
    const user = await createTeam(name);

    ctx.body = { id: user.id };
  });
// .get('/team/:id', async (ctx: Koa.Context) => {
//   const { user } = ctx;
//   ctx.body = await getUserById(user.id);
// })

export default router;
