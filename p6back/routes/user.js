const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/user');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;