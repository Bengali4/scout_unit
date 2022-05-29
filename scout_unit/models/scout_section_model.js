// Import sequelize
const Sequelize = require('sequelize');
// Import db
const db = require('../db');
//Import scout_model
const Scout = require('../models/scout_model');
//Import section_model
const Section = require('../models/section_model');

// Define scout_section model
const Scout_Section = db.define('scout_sections', {
    from: { type: Sequelize.INTEGER, allowNull: false },
    to: { type: Sequelize.INTEGER, allowNull: false }
});

//Create association between scout and section
Section.belongsToMany(Scout, {through: Scout_Section});
Scout.belongsToMany(Section, {through: Scout_Section});

// Sync db
db.sync();
//db.sync({force:true});

// Export scout_section model
module.exports = Scout_Section;