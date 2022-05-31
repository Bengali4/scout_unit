//Import Express
const express = require('express');
//Import scout_section_ctrl
const scout_section_ctrl = require('../controllers/scout_section_ctrl');
//Initialize scout_section express router
const scout_section_rt = express.Router();


const headers = {
    'Content-Type': 'application/json',
    //"Access-Control-Allow-Credentials" : true,
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods" : "*",
    "Access-Control-Allow-Headers" : "*" 
}
//Get scout_section by SectionId and ScoutId
scout_section_rt.get('/:section_id/:scout_id', async (req, res) => {
    res.set(headers);
    const scout_section = await scout_section_ctrl.getScout_Section(req.params.section_id, req.params.scout_id);
    res.json(scout_section);
});

//Route to create new scout_section
scout_section_rt.post('/', async (req, res) => {
    res.set(headers);
    const new_scout_section = await scout_section_ctrl.createScout_Section(req.body);
    res.json(new_scout_section);
});

//Modify scout_section
scout_section_rt.put('/:section_id/:scout_id', async (req, res) => {
    res.set(headers);
    const updated_scout_section = await scout_section_ctrl.updateScout_Section(req.params.section_id, req.params.scout_id, req.body);
    res.json(updated_scout_section);
});
//Delete scout_section
scout_section_rt.delete('/:section_id/:scout_id', async (req, res) => {
    res.set(headers);
    const deleted_scout_section = await scout_section_ctrl.deleteScout_Section(req.params.section_id, req.params.scout_id);
    res.json(deleted_scout_section);
});
//Export scout_section router
module.exports = scout_section_rt;