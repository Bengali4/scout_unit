//Import scout_model
const Scout = require('../models/scout_model');
//Import section_model
const Section = require('../models/section_model');

//Create scout controller
class scout_ctrl {
    //Get all scouts
    async getAllScouts() {
        let scouts = await Scout.findAll().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scouts;
    }

    //Get scout by id
    async getScoutById(scout_id) {
        let scout = await Scout.findOne({where:{scout_id:scout_id}, include: Section}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout;
    }

    //Create new scout
    async createScout(new_scout) {
        let scout = await Scout.build({
            scout_id: new_scout.scout_id,
            scout_first_name: new_scout.scout_first_name,
            scout_name: new_scout.scout_name,
            scout_totem: new_scout.scout_totem,
            scout_quali: new_scout.scout_quali,
            scout_email: new_scout.scout_email
        }).save().then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout;
    }
}

//Export scout controller
module.exports = new scout_ctrl();