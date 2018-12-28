const express = require('express');
const passport = require('passport');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.userCreate);
router.post('/login', userController.userLogin);
router.get('/currentuser', passport.authenticate('jwt', { session: false }), userController.userCurrent);
router.get('/dashboard', passport.authenticate('jwt', { session: false }), userController.userItems);

module.exports = router;
