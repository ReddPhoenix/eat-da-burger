// Import orm.js into burger.js
const orm = require('../config/orm');

// Create the code that will call the ORM functions 
// using burger specific input for the ORM.

const burger = {
    // selectAll Function

    selectAll: (callback) => {
        orm.selectAll((res) => {
            callback(res);
        });
    },

    // insertOne Function

    insertOne: (burger_name, callback) => {
        orm.insertOne(burger_name, (res) => {
            callback(res);
        });
    },

    // updateOne Function

    updateOne: (idBurger, callback) => {
        orm.updateOne(idBurger, (res) => {
            callback(res);
        });
    }
};

// Export in module.exports
module.exports = burger;