const path = require('path');
const views = require('koa-views');

module.exports = (app) => {
  app.use(views(path.resolve(__dirname, 'views'), {
    cache: process.env.NODE_ENV === 'production',
    map: {
      html: 'dust',
    },
  }));
};
