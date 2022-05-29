//Import Express
let express = require('express');
//Import scout_ctrl
let scout_ctrl = require('../controllers/scout_ctrl');
//Initialize scout express router
let scout_rt = express.Router();

//Route to get all scouts
scout_rt.get('/', async (req, res) => {
    let scouts = await scout_ctrl.getAllScouts();
    res.json(scouts);
});

//Route to get scout by id
scout_rt.get('/:scout_id', async (req, res) => {
    let scout = await scout_ctrl.getScoutById(req.params.scout_id);
    res.json(scout);
});

//Route to create new scout
scout_rt.post('/', async (req, res) => {
    let new_scout = await scout_ctrl.createScout(req.body);
    res.json(new_scout);
});

//Export scout router
module.exports = scout_rt;