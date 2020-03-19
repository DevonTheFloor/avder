const mongoose = require('mongoose');


const sauceSchema = mongoose.Schema({
  id: {type: String,require:false},
  useID: {type: String, require:false},
  name: {type: String,require: true},
  manufacturer : {type: String, require: true},
  description: {type: String, require: true},
  mainingredient: {type: String, require: true},
  imageUrl: {type: String},
  heat: {type: Number},
  likes : {type: Number},
  dislikes: {type: Number},
  usersliked: {type: [String]},
  usersdisliked: {type: [String]}
});

module.exports= mongoose.model('Sauce',sauceSchema);