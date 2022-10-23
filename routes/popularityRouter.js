const Router = require('express');
const router = new Router();
const PopularityController = require('../controllers/porularityController')

router.get('/', PopularityController.getPopular);

module.exports = router;