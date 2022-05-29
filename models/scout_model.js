// Import sequelize
let Sequelize = require('sequelize');
// Import db
let db = require('../db');

// Define scout model
let Scout = db.define('scouts', {
    scout_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    scout_first_name: { type: Sequelize.STRING, allowNull: false },
    scout_name: { type: Sequelize.STRING, allowNull: false },
    scout_totem: { type: Sequelize.STRING, allowNull: false },
    scout_quali: { type: Sequelize.STRING, allowNull: true },
    scout_email: { type: Sequelize.STRING, allowNull: true }
});

// Sync db
db.sync();

// Export scout model
module.exports = Scout;