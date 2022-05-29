//Import Express
const express = require('express');
//Import section_ctrl
const section_ctrl = require('../controllers/section_ctrl');
//Initialize section express router
const section_rt = express.Router();

const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods" : "*",
    "Access-Control-Allow-Headers" : "*"    
}

//Route to get all sections
section_rt.get('/', async (req, res) => {
    res.set(headers);
    const sections = await section_ctrl.getAllSections();
    res.json(sections);
});

//Route to get section by id
section_rt.get('/:section_id', async (req, res) => {
    res.set(headers);
    const section = await section_ctrl.getSectionById(req.params.section_id);
    res.json(section);
});

//Route to get scouts in a section between two years (From, To)
section_rt.get('/:section_id/:from/:to', async (req, res) => {
    res.set(headers);
    const scouts = await section_ctrl.getScoutsInSection(req.params.section_id, req.params.from, req.params.to);
    res.json(scouts);
});

//Route to create new section
section_rt.post('/', async (req, res) => {
    res.set(headers);
    const new_section = await section_ctrl.createSection(req.body);
    res.json(new_section);
});

//Export section router
module.exports = section_rt;