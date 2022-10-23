const Router = require('express');
const router = new Router();
const visualCrossingController = require('../controllers/trird-party/visualCrossing/visualCrossingController');

router.get('/', visualCrossingController.getLastWeekWeather);

module.exports = router;
