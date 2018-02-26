var connection_db = require('./connect_db');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const User = connection_db.define('user', {
    fullName: { type: Sequelize.STRING },
    email : { type : Sequelize.STRING }
});

// User.create({
//     fullName : 'Nguyễn Xuân Bằng',
//     email : 'bangnxse04011@fpt.edu.vn'
// });

// User.findOne().then(user => {
//     console.log(user.get('email'));
// })

// User.findAll({
//     where : {
//         fullName : 'Nguyễn Xuân Bằng'
//     }
// }).then(users => {
//     console.log('----------------------------');
//     console.log(JSON.stringify(users));
//     console.log('----------------------------');
// });

// User.findById(1)
// .then(users => {
//     console.log('----------------------------');
//     console.log(JSON.stringify(users));
//     console.log('----------------------------');
// });

// User.sync();

module.exports = User;

