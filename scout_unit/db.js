//Connection to Database scout
const Sequelize = require('sequelize');
const db = new Sequelize(
    'scout',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

//Export db module
module.exports = db;