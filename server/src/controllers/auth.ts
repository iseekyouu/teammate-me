import Router from 'koa-router';
import { decrypt, encrypt } from 'services/token';
import assert from 'http-assert';

const router = new Router();

router
  .post('/auth/token', async (ctx) => {
    const { username, password } = ctx.request.body;
    ctx.body = encrypt({ username, password });
  })
  .get('/auth/token', async (ctx) => {
    const { token } = ctx.request.query;
    assert(token, 400, 'token required');
    ctx.body = decrypt(token as string);
  });

export default router;
