//Import scout_model
const Scout = require('../models/scout_model');
//Import section_model
const Section = require('../models/section_model');

//Create scout controller
class scout_ctrl {
    //Get all scouts
    async getAllScouts() {
        const scouts = await Scout.findAll({order:[['totem','ASC']]}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scouts;
    }

    //Get scout by id
    async getScoutById(scout_id) {
        const scout = await Scout.findOne({where:{id:scout_id}, include:[{model: Section}]}).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        });
        return scout;
    }

    //Create new scout
    async createScout(new_scout) {
        const scout = await Scout.build({
            id: new_scout.id,
            first_name: new_scout.first_name,
            name: new_scout.name,
            totem: new_scout.totem,
            quali: new_scout.quali,
            email: new_scout.email
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