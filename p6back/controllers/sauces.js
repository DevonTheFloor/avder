
const Sauce = require('../models/Sauce');
const path = require('path');
const fs = require('fs');


 exports.createSauce = (req, res, next) => {
   console.log("CREATE !!");
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
  console.log("GET ALL");
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
  console.log("MODIFYING");
  const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({message:"sauce non trouvée"}));
};

exports.action = (req,res,next)=>{
 res.status(200).json({message:"route like ok"});
  console.log("LIKE");
    /*const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    userID: req.body.userID,
    likes: req.body.likes,
    userLiked: req.body.userLiked,
    userDisLiked : req.body.userDisliked
  })
  .then( ()=>{
  console.log("liké!") ;
  })
  .catch(res.status(404).json({message:"sauce introuvable"}));
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({message:"sauce non trouvée"}));
  */
};



exports.deleteSauce = (req, res, next) => {
  console.log("DELETE");
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      console.log("j'ai find le One!");
      const filename = sauce.imageUrl.split('/images/')[1];
    
      fs.unlink(`images/${filename}`, () => {
        sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({message:"image non effacée"}));
      });
    })
    .catch(error => res.status(500).json({message:"probleme de sauce"}));
};


  
 
  
  
  
  
  
  
  
  
  