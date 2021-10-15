import Router from "koa-router";
import md5 from 'md5';

const router = new Router();

router.post("/auth/token", async (ctx) => {
  const { username, password } = ctx.request.body;
  ctx.body = md5(`${username}:${password}`);
});


export default router;