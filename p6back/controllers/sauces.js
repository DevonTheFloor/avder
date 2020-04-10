const multer = require('multer');
const Sauce = require('../models/Sauce');
const path = require('path');

 exports.createOne = (req, res, next) => {
  let sauce = new Sauce({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({message:"okkk!"}))
    .catch(error => res.status(400).json({message:"la sauce ne peut être enregistrée"}));
};

exports.getAll = (req,res,next)=>{
  Sauce.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error =>res.status(400).json({message:"il n'y a aps de sauces dans base"}));
};

exports.getOne = (req,res,next)=>{
  Sauce.findOne({id: req.params._id})
    .then(sauce=>res.status(200).json(sauce))
    .catch(error =>res.tatus(404).json({message:"cette sauce n'existe pas"}));
};
