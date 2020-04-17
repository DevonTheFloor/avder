const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const path = require('path');
const saucesCtrl = require('../controllers/sauces');


router.post('/sauces',multer,saucesCtrl.createSauce);
router.post('/sauces/:id/like'),multer, saucesCtrl.action;
router.put('/sauces/:id',multer,saucesCtrl.modifySauce);
router.get('/sauces', saucesCtrl.getAll);
router.get('/sauces/:id',saucesCtrl.getOne);
router.delete('/sauces/:id',multer,saucesCtrl.deleteSauce);


module.exports = router;