
const Sauce = require('../models/Sauce');
const path = require('path');
const fs = require('fs');


 exports.createSauce = (req, res, next) => {
   console.log("COUCOU !!");
  const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({message:"probleme de connexion avec la base"}));
};

exports.getAll = (req,res,next)=>{
  Sauce.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error =>res.status(400).json({message:"il n'y a aps de sauces dans base"}));
};

exports.getOne = (req,res,next)=>{
  console.log("GET ONE");
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({message:"cette sauve n'existe pas"}));
};

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({message:"sauce non trouvée"}));
};

exports.like = (req,res,next)=>{
    const sauceObject = JSON.parse(req.body.sauce);
  //delete saucesObject._id;
  const sauce = new Sauce({
    userID: req.body.userID,
    likes: req.body.likes
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({message:"probleme de connexion avec la base"}));
};

exports.deleteSauce = (req,res,next)=>{
  console.log("chemin delete");
  /*Sauce.deleteOne({ _id: "5e90baf7df38fb1066d1393c"})
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({message:"pas de sauce!"}));*/
};

/*exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: "5e90baf7df38fb1066d1393c" })
    .then(sauce => {
      console.log("j'ai find le One!");
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        sauce.deleteOne({ _id: "5e90baf7df38fb1066d1393c" })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({error}));
      });
    })
    .catch(error => res.status(500).json({error}));
};*/