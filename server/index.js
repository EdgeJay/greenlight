/* eslint no-console: "off" */

require('dotenv').load();

const path = require('path');

const Koa = require('koa');

const Router = require('koa-router');

const views = require('koa-views');

const serve = require('koa-static');

const app = new Koa();
const router = new Router();

/* Set global state */
app.use(async (ctx, next) => {
  ctx.state.assetServer = process.env.NODE_ENV === 'production' ? '' : '//localhost:9191';
  await next();
});

app.use(serve(path.resolve(__dirname, '../public')));
app.use(serve(path.resolve(__dirname, '../resources')));

/* Template rendering using dustjs */
app.use(views(path.resolve(__dirname, 'views'), {
  map: {
    html: 'dust',
  },
}));

/* Routes */
router.get('/', async (ctx, next) => {
  await ctx.render('index');
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});