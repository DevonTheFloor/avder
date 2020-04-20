
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
  .catch(error =>res.status(400).json({message:"il n'y a aps de sauces dans base"}));
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
  Sauce.find({_id: req.params.id})
    .then((response)=> {console.log(response);

        var userLiked= req.params.userLiked;
        var userDisliked= req.params.useDisliked; 
        console.log(req.body);
                        console.log("rekparUL : "+req.params.userLiked);

      switch (req.body.like) {

      case 1:
        function liked() {
          console.log("function liked");
      if (userLiked.indexOf(req.body.userId) === -1) {
        userLiked.push(req.body.userId);
        console.log('Apres ajout du nouveau user : ' + userLiked);
        } else if (userLiked.indexOf(req.body.userId) > -1) {
        console.log(req.body.userId + 'A Déjà liké cette sauce.');
          }
       Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({message:"sauce non trouvée"}));
          console.log("fin liked");
};

      break;
      case -1:
      //liked(userDisLiked,:id);
        console.log('like = -1 tu n\'aimes pas');
      break;
      case 0:
               console.log("ZERO !!");
        //zero(userID);
      break;
      default:
        res.status(400).json({message:"la requête ne possède pas de valeur like"});
    }
  })
    .catch(error=> res.status(400).json({message:"sauce non trouvée"}));

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


  
 
  
  
  
  
  
  
  
  
  