//Import Scout_Section_Model
const Scout_Section = require('../models/scout_section_model');

//Create scout_section controller
class scout_section_ctrl {
    //Get scout_section by sectionId and scoutId
    async getScout_Section(section_id, scout_id){
        const scout_section = await Scout_Section.findOne({where:{sectionId:section_id, scoutId:scout_id}}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout_section;
    }

    //Create new scout_section
    async createScout_Section(new_scout_section){
        const scout_section = await Scout_Section.build({
            sectionId: new_scout_section.sectionId,
            scoutId: new_scout_section.scoutId,
            from: new_scout_section.from,
            to: new_scout_section.to,
        }).save().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout_section;
    }
    //Modify scout_section
    async updateScout_Section(section_id, scout_id, scout_section_obj){
        const scout_section = await Scout_Section.update({
            from: scout_section_obj.from,
            to: scout_section_obj.to
        },{where:{sectionId:scout_section_obj.sectionId, scoutId:scout_section_obj.scoutId}}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout_section;
    }
    //Delete scout_section
    async deleteScout_Section(section_id, scout_id){
        const scout_section_deleted = await Scout_Section.destroy({where:{sectionId:section_id, scoutId:scout_id}}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout_section_deleted;
    }
}

//Export scout_section controller
module.exports = new scout_section_ctrl();