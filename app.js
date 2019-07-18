const Koa = require('koa');
const static = require('koa-static');
const KoaRouter = require('koa-router');
const views = require('koa-views');
const path = require('path');
const nunjucks = require('nunjucks');

const app = new Koa();
const router = new KoaRouter();
//set static
app.use(static(__dirname + '/public'));

//set views middelwere
app.use(views(path.join(__dirname, './src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));
nunjucks.configure(path.join(__dirname, './src/templates'), {
  autoescape: true,
});

//set routes
router.use(require('./src/routes').routes());
app.use(router.routes());

//set port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log('Server is running!!!');
});
