const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //Dial0go_s0pra_i_dÛe_m@ssimi_6temi_d-L_mondo
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Id utilisateur inconnu';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("la requête n'a pas de jeton")
    });
  }
};
