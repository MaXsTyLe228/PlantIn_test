const Router = require('express');
const router = new Router();
const WeatherController = require('../controllers/weatherController')

router.get('/getWeather',WeatherController.getWeather);
router.get('/getAverageWeather',WeatherController.getAverageWeather);

module.exports = router;
