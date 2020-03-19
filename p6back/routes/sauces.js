const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const saucesCtrl = require('../controllers/sauces');

let storage = multer.diskStorage({
  destination: 'store/',
  filename: function (req, file, reName) {
    reName(null, file.originalname)
  }
});
var upload = multer({
  storage: storage
});

router.post('/sauces/',auth, upload.single('filer'),saucesCtrl.createSauce);
router.get('/sauces/', saucesCtrl.findAllSauces);

module.exports = router;