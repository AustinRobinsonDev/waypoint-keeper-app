const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Waypoint = require('../models/Waypoint');

// @route           GET api/waypoints
// @desc            get all users waypoints
// @access          Private
router.get('/', auth, async (req, res) => {
    try {
        const waypoints = await Waypoint.find({ user: req.user.id }).sort({ date: -1});
        res.json(waypoints);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
});

// @route           POST api/waypoints
// @desc            add new waypoints
// @access          Private
router.post('/', [auth, [
    check('name', 'name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
      //change
      const {name, tag, position, lat, lng} = req.body;

      try {
          //change
          const newWaypoint = new Waypoint({ name, tag, position, lat, lng, user: req.user.id});
          const waypoint = await newWaypoint.save();
          res.json(waypoint);
      } catch (err) {
          console.error(err.message);
          res.status(500).send('server error');         
      }
});

// @route           PUT api/waypoints/:id
// @desc            update waypoint
// @access          Private
router.put('/:id', auth, async (req, res) => {
    //change
    const {name, tag, position, lat, lng} = req.body;
    //build waypoint object
    const waypointFields = {};
    //change
    if (name) waypointFields.name = name;
    if (tag) waypointFields.tag = tag;
    if (position) waypointFields.position = position;
    if (lat) waypointFields.lat = lat;
    if (lng) waypointFields.lng = lng;

    try {
        let waypoint = await Waypoint.findById(req.params.id);
        if (!waypoint) return res.status(404).json({ msg: 'contact not found'});
        //make sure user owns contact
        if (waypoint.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not auth'});
        }
        waypoint = await Waypoint.findByIdAndUpdate(req.params.id, 
            {$set: waypointFields}, { new: true});
            res.json(waypoint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// @route           DELETE api/waypoints/:id
// @desc            delete waypoints
// @access          Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let waypoint = await Waypoint.findById(req.params.id);
        if (!waypoint) return res.status(404).json({ msg: 'contact not found'});
        //make sure user owns contact
        if (waypoint.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not auth'});
        }
        await Waypoint.findByIdAndRemove(req.params.id);
        res.json({ msg: 'contact removed'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;