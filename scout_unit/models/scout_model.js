// Import sequelize
const Sequelize = require('sequelize');
// Import db
const db = require('../db');

// Define scout model
const Scout = db.define('scouts', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: Sequelize.STRING, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    totem: { type: Sequelize.STRING, allowNull: false },
    quali: { type: Sequelize.STRING, allowNull: true },
    email: { type: Sequelize.STRING, allowNull: true }
});

// Sync db
db.sync();

// Export scout model
module.exports = Scout;