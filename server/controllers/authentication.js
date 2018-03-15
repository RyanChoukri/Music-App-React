const jwt = require('jsonwebtoken'),
      crypto = require('crypto'),
      User = require('../models/user'),
      config = require('../config/main');

function generateToken(user) {
return jwt.sign(user, config.secret, {
    expiresIn: 10080 // in seconds
});
}

function setUserInfo(request) {
    return {
      _id: request._id,
      firstname: request.profile.firstname,
      lastname: request.profile.lastname,
      email: request.email,
      role: request.role,
    };
}


exports.login = function(req, res, next) {
    let userInfo = setUserInfo(req.user);
    let token = 'JWT ' + generateToken(userInfo);
    let jsonSend = Object.assign(userInfo, { token });
    setTimeout(() => {
      res.status(200).json( jsonSend);
    }, 2000);
  }


//========================================
// Registration Route
//========================================
exports.register = function(req, res, next) {
    const {email, firstname, lastname, password } = req.body;

    if (!email) {
      return res.status(422).send({ error: 'You must enter an email address.'});
    }

    if (!firstname || !lastname) {
      return res.status(422).send({ error: 'You must enter your full name.'});
    }

    if (!password) {
      return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err); }

        if (existingUser) {
          return res.status(422).send({ error: 'That email address is already in use.' });
        }

        let user = new User({
          email: email,
          password: password,
          profile: { firstName: firstname, lastName: lastname }
        });

        user.save(function(err, user) {
          if (err) { return next(err); }

          let userInfo = setUserInfo(user);
          setTimeout(() => {
            res.status(201).json({
              token: 'JWT ' + generateToken(userInfo),
              user: userInfo
            });
          }, 2000);
          
        });
    });
}