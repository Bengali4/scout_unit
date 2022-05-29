// Import sequelize
const Sequelize = require('sequelize');
// Import db
const db = require('../db');

// Define Section model
const Section = db.define('sections', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: true }
});

// Sync db
db.sync();

// Export Section model
module.exports = Section;