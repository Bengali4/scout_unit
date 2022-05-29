// Import sequelize
let Sequelize = require('sequelize');
// Import db
let db = require('../db');
//Import scout_model
const Scout = require('../models/scout_model');
//Import section_model
const Section = require('../models/section_model');

// Define scout_section model
let Scout_Section = db.define('scout_sections', {
    /* section_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Section,
            key: 'section_id'
        }
    },
    scout_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Scout,
            key: 'scout_id'
        }
    }, */
    to: { type: Sequelize.INTEGER, allowNull: false },
    from: { type: Sequelize.INTEGER, allowNull: false }
});

//Create association between scout and section
Section.belongsToMany(Scout, {through: Scout_Section});
Scout.belongsToMany(Section, {through: Scout_Section});

// Sync db
db.sync();
//db.sync({force:true});

// Export scout_section model
module.exports = Scout_Section;