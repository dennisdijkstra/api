const express = require('express');
const itemController = require('../../controllers/item.controller');

const router = express.Router();

router.post('/', itemController.itemCreate);
router.get('/:id', itemController.itemDetails);
router.put('/:id', itemController.itemUpdate);
router.delete('/:id', itemController.itemDelete);

module.exports = router;
