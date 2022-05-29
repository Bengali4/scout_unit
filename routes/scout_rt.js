//Import Express
const express = require('express');
//Import scout_ctrl
const scout_ctrl = require('../controllers/scout_ctrl');
//Initialize scout express router
const scout_rt = express.Router();

//Route to get all scouts
scout_rt.get('/', async (req, res) => {
    const scouts = await scout_ctrl.getAllScouts();
    res.json(scouts);
});

//Route to get scout by id
scout_rt.get('/:scout_id', async (req, res) => {
    const scout = await scout_ctrl.getScoutById(req.params.scout_id);
    res.json(scout);
});

//Route to create new scout
scout_rt.post('/', async (req, res) => {
    const new_scout = await scout_ctrl.createScout(req.body);
    res.json(new_scout);
});

//Export scout router
module.exports = scout_rt;