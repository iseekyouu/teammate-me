import Router from 'koa-router';
import { decrypt, encrypt } from 'services/token';
import assert from 'http-assert';
import { COOKIE_KEY_ACCESS_TOKEN } from 'lib/constants';

const router = new Router();

router
  .post('/auth/token', async (ctx) => {
    const { username, password } = ctx.request.body;
    const accessToken = encrypt({ username, password });
    ctx.cookies.set(COOKIE_KEY_ACCESS_TOKEN, accessToken, {
      httpOnly: true,
    });

    ctx.body = accessToken;
  })
  .get('/auth/token-info', async (ctx) => {
    const { token } = ctx.request.query;
    assert(token, 400, 'token required');
    ctx.body = decrypt(token as string);
  });

export default router;
