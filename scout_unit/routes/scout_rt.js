//Import Express
const express = require('express');
//Import scout_ctrl
const scout_ctrl = require('../controllers/scout_ctrl');
//Initialize scout express router
const scout_rt = express.Router();

const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Credentials" : true,
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods" : "*",
    "Access-Control-Allow-Headers" : "*"    
}

//Route to get all scouts
scout_rt.get('/', async (req, res) => {
    res.set(headers);
    const scouts = await scout_ctrl.getAllScouts();
    res.json(scouts);
});

//Route to get scout by id
scout_rt.get('/:scout_id', async (req, res) => {
    res.set(headers);
    const scout = await scout_ctrl.getScoutById(req.params.scout_id);
    res.json(scout);
});

//Route to create new scout
scout_rt.post('/', async (req, res) => {
    res.set(headers);
    const new_scout = await scout_ctrl.createScout(req.body);
    res.json(new_scout);
});

//Export scout router
module.exports = scout_rt;