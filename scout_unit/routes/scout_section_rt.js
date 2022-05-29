//Import Express
const express = require('express');
//Import scout_section_ctrl
const scout_section_ctrl = require('../controllers/scout_section_ctrl');
//Initialize scout_section express router
const scout_section_rt = express.Router();

//Route to create new scout_section
scout_section_rt.post('/', async (req, res) => {
    const new_scout_section = await scout_section_ctrl.createScout_Section(req.body);
    res.json(new_scout_section);
});

//Export scout_section router
module.exports = scout_section_rt;