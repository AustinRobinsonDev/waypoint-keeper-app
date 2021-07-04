const express = require('express');
const router = express.Router();

// @route           GET api/waypoints
// @desc            get all users waypoints
// @access          Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route           POST api/waypoints
// @desc            add new waypoints
// @access          Private
router.post('/', (req, res) => {
    res.send('add new waypoints');
});

// @route           PUT api/waypoints/:id
// @desc            update waypoint
// @access          Private
router.put('/:id', (req, res) => {
    res.send('update waypoints');
});

// @route           DELETE api/waypoints/:id
// @desc            delete waypoints
// @access          Private
router.delete('/:id', (req, res) => {
    res.send('Delete waypoints');
});

module.exports = router;