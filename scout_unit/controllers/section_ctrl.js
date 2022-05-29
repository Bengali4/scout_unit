//Import section_model
const Section = require('../models/section_model');
//Import scout_model
const Scout = require('../models/scout_model');
//Import scout_section_model
const Scout_Section = require('../models/scout_section_model');
//Import sequelize
const { Op } = require("sequelize");

//Create section controller
class section_ctrl {
    //Get all sections
    async getAllSections() {
        const sections = await Section.findAll().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return sections;
    }

    //Get section by id
    async getSectionById(section_id) {
        const section = await Section.findOne({where:{id:section_id}, include:[{model: Scout, through:{attributes:['from', 'to']}}]}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return section;
    }

    //Get scouts in a section between two years (From, To)
    async getScoutsInSection(section_id, from, to) {
        const scouts = await Section.findOne({where:{id:section_id}, include:[{model: Scout, through:{where:{from:{[Op.gte]:from},to:{[Op.lte]:to}}}}]}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scouts;
    }


    //Create new section
    async createSection(new_section) {
        const section = await Section.build({
            id: new_section.id,
            name: new_section.name,
            description: new_section.description
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