//Import Express
const express = require('express');
//Import section_ctrl
const section_ctrl = require('../controllers/section_ctrl');
//Initialize section express router
const section_rt = express.Router();

//Route to get all sections
section_rt.get('/', async (req, res) => {
    const sections = await section_ctrl.getAllSections();
    res.json(sections);
});

//Route to get section by id
section_rt.get('/:section_id', async (req, res) => {
    const section = await section_ctrl.getSectionById(req.params.section_id);
    res.json(section);
});

//Route to create new section
section_rt.post('/', async (req, res) => {
    const new_section = await section_ctrl.createSection(req.body);
    res.json(new_section);
});

//Export section router
module.exports = section_rt;