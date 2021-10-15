import Koa  from 'koa';

export default async function errorHandler(ctx: Koa.ParameterizedContext, next: Koa.Next) {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
}