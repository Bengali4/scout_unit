//Import Scout_Section_Model
const Scout_Section = require('../models/scout_section_model');

//Create scout_section controller
class scout_section_ctrl {
    // Get scout_section by scout

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
}

//Export scout_section controller
module.exports = new scout_section_ctrl();