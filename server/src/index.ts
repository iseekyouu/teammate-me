import Koa from "koa";
import Router from "koa-router";

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import db from 'lib/db';

const app = new Koa();
const router = new Router();

// Hello world
router.get("/", async (ctx, next) => {
  console.log({ db: await db });
  ctx.body = 'helo world';
  await next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Koa started, on ${PORT}`);
});

export default app;