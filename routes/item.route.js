const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/create', itemController.itemCreate);

module.exports = router;
