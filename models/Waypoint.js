const mongoose = require('mongoose');

const WaypointSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
    },
    lat: {
        type: String
    },
    type: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Waypoint', WaypointSchema);