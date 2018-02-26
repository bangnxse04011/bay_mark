const db_users = require('./db_users.js');


module.exports = {

    findUserByID : (id) => {
        return db_users.findById(parseInt(id));
    },

    findAllUser : () => {
        return db_users.findAll();
    } 

}
