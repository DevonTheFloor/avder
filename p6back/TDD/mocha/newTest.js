const assert = require('assert');

describe('testons les operations', function(){
  it('devra retourner 4', function(){
    assert.equal(4,2+2);
  });
  it("Ne devra pas retourner 5", function(){
    assert.notEqual(5,2+2);
  });
});