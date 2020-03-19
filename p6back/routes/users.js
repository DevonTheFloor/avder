const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users');

router.post('/',usersCtrl.signup);
router.post('/',auth, usersCtrl.login);

module.exports = router;