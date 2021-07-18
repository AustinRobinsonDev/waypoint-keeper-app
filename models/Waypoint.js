const { LngLat } = require('mapbox-gl');
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
    position: {
        type: Array
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('waypoint', WaypointSchema);