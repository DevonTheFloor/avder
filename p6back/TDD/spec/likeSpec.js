//const assert = require ('assert');
const jasmine = require('jasmine');
const like = require('../middleware/like-btn');



describe("like button", function(){
  
    beforeEach(function(){
     let likes;
     let userLiked;
     let userDisLiked;
  });

  it("Je clique pour ajouter un like", function(){
    expect(2)toBe(2);
   // assert.equal(userLiked.push(userID));
  });
  
  it("Je clique pour annuler mon like", function(){
   /* assert.equal(likes -= likes);
    assert.eqaul(userDisLiked.push(usedID));
    assert.equal(userLiked.splice(userId));*/
  });
  
  it("Je clique pour mettre un pas j'aime", function(){
    /*assert.equal(likes -= likes);
    assert.equal(userDisLiked.push(userID));*/
  });
  it("Je clique pour retirer un pas j'aime", function (){
    /*assert.equal(likes -= likes);
    assert.equal(userDisliked.push(userID))*/
  });
});