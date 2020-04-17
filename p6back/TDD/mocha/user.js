module.exports = {

    //Fake user login
    userLogin : "",
    //Fake user password
    userPwd : "",

    /**
     * Fonction permettant de se log, lancera une callback à la fin de
     *   la vérification
     * @param user
     * @param pwd
     * @param callback 1er paramètre true = success, false = non correct
     */
    login : function(user,pwd,callback){
       if(user === this.userLogin && pwd === this.userPwd){
          callback(true);
       }else{
          callback(false);
       }
    },

    /**
     * Fonction permettant d'enregistrer un nouveau utilisateur,
     *   lancera une callback après l'insertion de l'utilisateur
     * @param user
     * @param pwd
     * @param callback 1er paramètre { user, pwd }
     */
    signup : function(user,pwd, callback){
       this.userLogin = user;
       this.userPwd = pwd;

       callback({user:this.userLogin, pwd:this.userPwd});
    }
};