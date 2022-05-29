//Import section_model
const Section = require('../models/section_model');
//Import scout_model
const Scout = require('../models/scout_model');

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

    //Get section by id
    async getSectionById(section_id) {
        let section = await Section.findOne({where:{section_id:section_id}, include: Scout}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return section;
    }

    //Create new section
    async createSection(new_section) {
        let section = await Section.build({
            section_id: new_section.section_id,
            section_name: new_section.section_name,
            section_description: new_section.section_description
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