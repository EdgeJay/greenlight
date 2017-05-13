/* eslint no-console: "off" */

const Koa = require('koa');
const Router = require('koa-router');
const routes = require('./routes');
const assets = require('./assets');
const templates = require('./templates');
const globals = require('./globals');

const app = new Koa();
const router = new Router();

/* Setup serving of assets */
assets(app);

templates(app);

/* Set global state */
globals(app);

/* Template rendering using dustjs */
templates(app);

/* Routes */
routes(app, router);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
