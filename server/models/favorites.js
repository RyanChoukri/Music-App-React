const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
        track: [{
            type: Schema.Types.ObjectId,
            ref: 'Track'
        }],
        user: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        timestamps: true
});


module.exports = mongoose.model('Favorite', FavoriteSchema);