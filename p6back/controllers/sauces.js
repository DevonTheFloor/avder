
const Sauce = require('../models/Sauce');
const path = require('path');
const fs = require('fs');


 exports.createSauce = (req, res, next) => {
   console.log("CREATE !!");
  const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    ...sauceObject,
    likes: 0,
    dislikes: 0,
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
  .catch(error =>res.status(400).json({message:"il n'y a pas de sauces dans base"}));
};

exports.getOne = (req,res,next)=>{
  console.log("GET ONE");
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({message:"cette sauce n'existe pas"}));
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

exports.like = (req,res,next)=>{
   console.log("LIKE in route");
    console.log(req.body);
      var userId = req.body.userId;
      console.log("userId body : "+userId);
      var like = req.body.like;
      console.log("like = "+like);   

      let avis;
      switch (like) {
      case 1:
        Sauce.updateOne({_id: req.params.id},
          {$inc: {likes: 1}, $push:{usersLiked: userId} })
          .then(()=>res.status(201).json({message:"you like the sauce"}))
          .catch(error => res.status(400).json({ error:error }));
        break;

      case -1:
        Sauce.updateOne({ _id: req.params.id },
          {$inc: {dislikes: 1}, $push:{usersDisliked: userId} })
          .then(()=>res.status(201).json({message:"like ajouté"}))
            .catch(error => res.status(400).json({ error:error }));
        break;
          
      case 0:
        Sauce.findOne({ _id: req.params.id})
          .then((promise)=> {
            if(promise.usersLiked.includes(userId)) {
              unlike(req,res);
            } else {
              undislike(req,res);
            }
          })
            .catch(error => res.status(400).json({message:"sauce non trouvée"}));
        break;
          
      default:
        console.log("that's all")};
        
  };

function unlike(req,res){
  Sauce.updateOne({_id: req.params.id},
    {$pull: {usersLiked: req.body.userId},$inc: {likes: -1}})
  .then(()=>{res.status(201).json({message: "sauce unliked"})})
  .catch(()=> {res.status(400).json({error:error})})
}

function undislike(req,res){
  Sauce.updateOne({_id: req.params.id},
    {$pull: {usersDisliked: req.body.userId},$inc: {dislikes: -1}})
  .then(()=>{res.status(201).json({message: "sauce unliked"})})
  .catch(()=> {res.status(400).json({error:error})})
}

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


