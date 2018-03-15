const crypto = require('crypto'),
      User = require('../models/user'),
      Tracks = require('../models/tracks'),
      Favorites = require('../models/favorites'),
      config = require('../config/main');



exports.delete = function(req, res, next) {
    const id = req.params.id;
    if (!id) {
        return res.status(422).send({ error: 'You must enter all thing for rm fav.'});
    }
    
    Favorites.remove({track : id, user : res.locals.user._id}).then(favorites => {
        res.json({track : id});

    });
}

exports.add = function(req, res, next) {
    const trackId = req.body.id;
    const user = res.locals.user;

    if (!trackId) {
        return res.status(422).send({ error: 'You must enter all thing for create track.'});
    }

    let newFavorite = new Favorites({
        track : trackId,
        user : user._id,
    });

    newFavorite.save((err, fav) => {
        if (err) { return next(err); }
        res.json(fav);
    });
}


exports.get = function(req, res, next) {
    Favorites
    .find({user : res.locals.user._id})
    .exec()
    .then(favorites => {
        res.json({favorites});
    })
    .catch(err => console.log(err));
}
