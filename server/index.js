/* eslint no-console: "off" */

const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
// const serve = require('koa-static');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const webpack = require('webpack');
const config = require('../config/webpack.dev.js');

const app = new Koa();
const router = new Router();

/* Hot module replacement */
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(devMiddleware(compiler, {
    publicPath: '/assets/js/',
  }));
  app.use(hotMiddleware(compiler));
}

/* Set global state */
app.use(async (ctx, next) => {
  ctx.state.assetServer = process.env.NODE_ENV === 'production' ? '' : '//localhost:9090';
  ctx.state.jsAssetSuffix = process.env.NODE_ENV === 'production' ? '.min.js' : '.js';
  await next();
});

/* Serve static assets */
// app.use(serve(path.resolve(__dirname, '../public')));
// app.use(serve(path.resolve(__dirname, '../resources')));

/* Template rendering using dustjs */
app.use(views(path.resolve(__dirname, 'views'), {
  cache: process.env.NODE_ENV === 'production',
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
