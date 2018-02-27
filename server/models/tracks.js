const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TrackSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        song: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
});


module.exports = mongoose.model('Track', TrackSchema);