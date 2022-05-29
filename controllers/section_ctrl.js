//Import section_models
const Section = require('../models/section_models');

//Create section controller
class section_ctrl {
    //Get all sections
    async getAllSections() {
        let sections = await Section.findAll().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return sections;
    }
    //Create new section
    async createSection(new_section) {
        let section = await Section.build({
            section_id: new_section.section_id,
            section_name: new_section.section_name,
            section_description: secnew_sectiontion.section_description
        }).save().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return section;
    }
}

//Export section controller
module.exports = new section_ctrl();