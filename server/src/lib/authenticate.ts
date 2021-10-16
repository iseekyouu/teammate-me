import assert from 'http-assert';
import Koa from 'koa';
import { decrypt } from 'services/token';
import { getUser } from 'services/user';

export default async function authenticate(ctx: Koa.Context, next: Koa.Next) {
  const { authorization } = ctx.headers;
  assert(authorization, 403, 'no authorized');
  const decrypted = decrypt(authorization.split(' ')[1]);
  ctx.user = await getUser(decrypted.username, decrypted.password);
  next();
}
