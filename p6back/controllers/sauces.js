const multer = require('multer');
const Sauce = require('../models/Sauce');
const path = require('path');

 exports.createSauce = (req, res, next) => {
  let sauce = new Sauce({
    nom: req.file.originalname,
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({message:"okkk!"}))
    .catch(error => res.status(400).json({
      error
    }));
};
exports.findAllSauces = (req,res,next)=>{
  Sauce.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error =>res.status(400).json({error}));
};
