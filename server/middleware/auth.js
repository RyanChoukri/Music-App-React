const jwt = require('jsonwebtoken'),
    User = require('../models/user'),
    config = require('../config/main');


const verifyToken = function(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token.substr(4), config.secret, function(err, payload) {
        if (err) {
          return res.status(401);    
        } else {
          User.findById(payload._id, function(err, newUser) {
            if (err) { return res.status(401).send("Relog"); }
            if (newUser) {
              res.locals.user = newUser;
              next(false, newUser);
            } else {
              return res.status(401).send("Relog");
            }
          });
        }
      });
  
    } else {
      return res.status(401).send("Relog");
    }
};

module.exports = {
    verifyToken
}