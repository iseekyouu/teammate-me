import authenticate from 'lib/authenticate';
import Router from 'koa-router';
import Koa from 'koa';
import { createCharacter, getCharactersByOwner } from 'services/character';

const router = new Router();

router
  .use(authenticate)
  .post('/characters', async (ctx: Koa.Context) => {
    const { name, userId, ownerUserId } = ctx.request.body;
    const character = await createCharacter({ name, userId, ownerUserId });

    ctx.body = { id: character.id };
  })
  .get('/characters/me', async (ctx: Koa.Context) => {
    const character = await getCharactersByOwner(ctx.user.id);
    ctx.body = { character };
  });

export default router;
