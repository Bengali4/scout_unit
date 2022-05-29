//Import Scout_Section_Model
let Scout_Section = require('../models/scout_section_model');

//Create scout_section controller
class scout_section_ctrl {
    //Create new scout_section
    async createScout_Section(new_scout_section){
        let scout_section = await Scout_Section.build({
            sectionSectionId: new_scout_section.sectionSectionId,
            scoutScoutId: new_scout_section.scoutScoutId,
            to: new_scout_section.to,
            from: new_scout_section.from
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