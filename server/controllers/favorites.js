const crypto = require('crypto'),
      User = require('../models/user'),
      Tracks = require('../models/tracks'),
      Favorites = require('../models/favorites'),
      config = require('../config/main');



exports.delete = function(req, res, next) {
    const id = req.params.id;
    console.log(id);
    if (!id) {
        return res.status(422).send({ error: 'You must enter all thing for rm fav.'});
    }

    Favorites.remove({_id : id}).then(favorites => {
        console.log(favorites);
        res.json({test : "test"});

    });
}

exports.add = function(req, res, next) {
    const trackId = req.body.id;
    if (!trackId) {
        return res.status(422).send({ error: 'You must enter all thing for create track.'});
    }

    // console.log(trackId);
    let newFavorite = new Favorites({
        track : trackId,
        user : trackId,
    });

    newFavorite.save((err, track) => {
        if (err) { return next(err); }
        res.json(track);
    });
}


exports.get = function(req, res, next) {
    const tracks = Tracks
    .find()
    .exec()
    .then(tracks => {
        res.json(tracks);
    })
    .catch(err => console.log(err));
}
