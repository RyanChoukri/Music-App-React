const crypto = require('crypto'),
      User = require('../models/user'),
      Tracks = require('../models/tracks'),
      config = require('../config/main');



exports.add = function(req, res, next) {
    console.log('PASSAGE IN GET');
    console.log(req.body);

    const title = req.body.title;
    const artist = req.body.artist;
    const song = req.body.song;
    const cover = req.body.cover;
    const type = req.body.type;

    if (!title || !artist || !song || !cover || !type) {
        return res.status(422).send({ error: 'You must enter all thing for create track.'});
    }
    let newTrack = new Tracks({
        title,
        artist,
        song,
        cover,
        type
    });

    newTrack.save((err, track) => {
        if (err) { return next(err); }
        res.json(track);
    });
}


exports.get = function(req, res, next) {
    console.log('PASSAGE IN GET');

    const tracks = Tracks
    .find()
    .exec()
    .then(tracks => {
        res.json(tracks);
    })
    .catch(err => console.log(err));
}
