// Import sequelize
const Sequelize = require('sequelize');
// Import db
const db = require('../db');

// Define Section model
const Section = db.define('section', {
    section_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    section_name: { type: Sequelize.STRING, allowNull: false },
    section_description: { type: Sequelize.STRING, allowNull: true }
});

// Sync db
db.sync();

// Export Section model
module.exports = Section;