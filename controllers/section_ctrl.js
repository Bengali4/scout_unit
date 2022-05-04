//Import section_models
const Section = require('./models/section_models');

//Create section controller
class section_ctrl {
    //Get all sections
    getAllSections(req, res) {
        Section.findAll().then(sections => {	
            res.send(sections);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        }
        );
    }
}