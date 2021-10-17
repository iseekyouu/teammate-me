import { COOKIE_KEY_ACCESS_TOKEN } from 'lib/constants';
import assert from 'http-assert';
import Koa from 'koa';
import { decrypt } from 'services/token';
import { authenticateUser } from 'services/user';

function parseTokenFromCookies(ctx: Koa.Context) {
  return ctx.cookies.get(COOKIE_KEY_ACCESS_TOKEN);
}

function parseTokenFromHeaders(ctx: Koa.Context) {
  return ctx.headers.authorization?.split(' ')[1];
}

export default async function authenticate(ctx: Koa.Context, next: Koa.Next) {
  const accessToken = parseTokenFromCookies(ctx) || parseTokenFromHeaders(ctx);
  assert(accessToken, 403, 'no token');

  const decrypted = decrypt(accessToken);
  ctx.user = await authenticateUser(decrypted.username, decrypted.password);
  await next();
}
