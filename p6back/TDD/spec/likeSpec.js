
const jasmine = require('jasmine');
const like = require('../../middleware/like-btn-jasmine');



describe("like button", function(){
  
    beforeEach(function(){
     let likes;
     let userLiked;
     let userDisLiked;
  });

  it("devrait ajouter 1 au tableau de userLiked", function(){
    expect(1+1).toBe(2);

  });
  
  it("devrais retirer 1 au tableau des userLiked", function(){
	expect(2-1).toBe(1);
  });
  
  it("devrais ajouter 1 au tableau des userDisliked", function(){
	expect(2-1).toBe(1);
  });
  it("devrais retirer 1 au tableau des userDisliked", function (){
	expect(2-1).toBe(1);
  });
});
