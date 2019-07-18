const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('/', ctrl.search);
router.get('/profile_1', ctrl.profile_1);
router.get('/profile_2', ctrl.profile_2);
router.get('/password_recovery', ctrl.pass_rec);
router.get('/sigh_up', ctrl.sigh_up);
router.get('/sigh_in', ctrl.sigh_in);
router.get('/chat', ctrl.chat)


module.exports = router;