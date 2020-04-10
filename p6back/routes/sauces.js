const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const path = require('path');
const saucesCtrl = require('../controllers/sauces');


router.post('/sauces',auth, multer, saucesCtrl.createSauce);
router.put('/sauces',auth, saucesCtrl.modifySauce);
router.get('/sauces',auth, saucesCtrl.getAll);
router.get('/sauces/:id',auth, saucesCtrl.getOne);
router.delete('sauces/:id',auth, saucesCtrl.deleteSauce);

module.exports = router;