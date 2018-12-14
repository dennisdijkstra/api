const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/create', itemController.itemCreate);
router.get('/:id', itemController.itemDetails);
router.put('/:id/update', itemController.itemUpdate);
router.delete('/:id/delete', itemController.itemDelete);

module.exports = router;
