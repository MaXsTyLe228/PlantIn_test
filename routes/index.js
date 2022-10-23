const Router = require('express');
const router = new Router();

const cityRouter = require('./cityRouter')
const weatherRouter = require('./weatherRouter')
const popularityRouter = require('./popularityRouter')
const visualCrossingRouter = require('./visualCrossingRouter')

router.use('/city', cityRouter);
router.use('/weather', weatherRouter);
router.use('/popular', popularityRouter);
router.use('/visualCrossing', visualCrossingRouter);

module.exports = router;
