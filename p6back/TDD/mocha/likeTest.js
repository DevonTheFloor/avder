const assert = require ('assert');
const sauce = require('../../models/Sauce');
const like = require('../../middleware/like-btn-test');


describe("like button", function(){
  
    before(function(){
     let sauce.likes = 0;
     let sauceuserLiked = ["000"];
     let sauceuserDisLiked = ["000"];
    });

  it("Je clique pour ajouter un like", function(){
    assert.equal(likes += likes);
    assert.equal(userLiked.push(userID));
  });
  
  it("Je clique pour annuler mon like", function(){
    assert.equal(likes -= likes);
    assert.eqaul(userDisLiked.push(usedID));
    assert.equal(userLiked.splice(userId));
  });
  
  it("Je clique pour mettre un pas j'aime", function(){
    assert.equal(likes -= likes);
    assert.equal(userDisLiked.push(userID));
  });
  it("Je clique pour retirer un pas j'aime", function (){
    assert.equal(likes -= likes);
    assert.equal(userDisliked.push(userID))
  });
  

});