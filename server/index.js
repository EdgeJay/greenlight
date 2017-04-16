require('dotenv').load();
const Koa = require('koa');
const app = new Koa();



app.listen(process.env.PORT);
