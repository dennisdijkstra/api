const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/test', itemController.test);

module.exports = router;
