const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const saucesCtrl = require('../controllers/sauces');


router.post('/sauces',saucesCtrl.createOne);
//router.post('/sauces', saucesCtrl.modifyOne);
router.get('/sauces', saucesCtrl.getAll);
router.get('/sauces/:id',saucesCtrl.getOne);

module.exports = router;