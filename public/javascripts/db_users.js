var connection_db = require('./connect_db');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const User = connection_db.define('user', {
    fullName: { type: Sequelize.STRING },
    email : { type : Sequelize.STRING }
});

module.exports = User;

