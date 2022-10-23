const Router = require('express');
const router = new Router();
const cityController = require('../controllers/cityController');

router.get('/', cityController.getCities);
router.post('/', cityController.createCity);

module.exports = router;
