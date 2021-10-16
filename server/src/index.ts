import Koa from 'koa';
import Router from 'koa-router';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import authRoutes from 'controllers/auth';
import usersRoutes from 'controllers/users';
import errorHandler from 'lib/errorHandler';

const app = new Koa();
// Routes
const router = new Router();
router
  .use(errorHandler)
  .use('/api/v1', authRoutes.routes(), usersRoutes.routes())
  .use(router.allowedMethods());

app
  .use(json())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Koa started, on ${PORT}`);
});

export default app;
