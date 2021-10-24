import Koa from 'koa';
import authenticate from 'lib/authenticate';
import Router from 'koa-router';
import { createTeam, getTeams } from 'services/team';

const router = new Router();

router
  .use(authenticate)
  .post('/teams', async (ctx: Koa.Context) => {
    const {
      name,
    } = ctx.request.body;
    const user = await createTeam(name);

    ctx.body = { id: user.id };
  })
  .get('/teams', async (ctx: Koa.Context) => {
    ctx.body = await getTeams();
  });

export default router;
