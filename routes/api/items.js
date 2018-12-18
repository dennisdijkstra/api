const express = require('express');
const itemController = require('../../controllers/item.controller');

const router = express.Router();

router.get('/', itemController.items);
router.post('/', itemController.itemCreate);
router.get('/:id', itemController.itemDetails);
router.put('/:id/update', itemController.itemUpdate);
router.delete('/:id/delete', itemController.itemDelete);

module.exports = router;
