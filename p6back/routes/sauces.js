const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const path = require('path');
const saucesCtrl = require('../controllers/sauces');


router.post('/sauces',auth,multer,saucesCtrl.createSauce);
router.post('sauces/:id/like'),auth, multer, saucesCtrl.like;
router.put('/sauces',auth,multer,saucesCtrl.modifySauce);
router.get('/sauces',auth,saucesCtrl.getAll);
router.get('/sauces/:id',auth,saucesCtrl.getOne);
router.delete('sauces/:5e90baf7df38fb1066d1393c',auth,multer,saucesCtrl.deleteSauce);

//5e90baf7df38fb1066d1393c
module.exports = router;