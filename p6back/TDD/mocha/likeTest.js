const assert = require ('assert');
const likebtn = require('./like-btn');


describe("like button", function(){
  
    before(function(){
     let likes = 0;
     let userLiked = ["000"];
     let userDisLiked = ["000"];
  });

  it("should add like to userLiked[]", function(){
    assert.equal(likes += likes, true);
    assert.equal(userLiked.push(userID),true);
  });
  
  it("should Cancel like from userLiked[]", function(){
    assert.equal(likes -= likes);
    assert.eqaul(userDisLiked.push(usedID));
    assert.equal(userLiked.splice(userId));
  });
  
  it("should add  dislike to userDisliked[]", function(){
    assert.equal(likes -= likes);
    assert.equal(userDisLiked.push(userID));
  });
  it("should cancel dislike from userDisliked[]", function (){
    assert.equal(likes -= likes);
    assert.equal(userDisliked.push(userID))
  });

        
      
});
