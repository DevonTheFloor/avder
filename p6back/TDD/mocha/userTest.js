//Nous importons la librairie assert
var assert = require('assert');
var User = require('./user');


//On créé un groupe que l’on nomme Utilisateur
describe('Utilisateur', function () {

  before(function () {
    User.userLogin = "root";
    User.userPwd = "pwd";
  });
  //On créé un sous groupe que l'on nomme Connexion, qui regroupera les
  //  connexion / deconnexion / inscription
  describe('Connexion', function () {

    it('#User - Inscription OK', function (done) {
      User.signup("root", "pwd", function (userInserted) {
        assert.equal(userInserted.user, "root");
        assert.equal(userInserted.pwd, "pwd");
        done();
      });
    });

    it.skip('#User - Connexion OK', function (done) {
      User.login("root", "pwd", function (result) {
        assert.equal(result, true);
        done();
      });
    });

    it('#User - Connexion Non OK', function (done) {
      User.login("root", "badPassword", function (result) {
        assert.equal(result, false);
        done();
      });
    });
  });
});
