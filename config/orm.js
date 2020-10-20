// Import (require) connection.js into orm.js

const connection = require('../config/connection');


// Methods to retrieve and store data in database
const orm = {

    // Function to return all from burgers
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
    
    // Function to insert into burgers
    // How to insert burger_name & devoured?
    insertOne: function (callback) {
        connection.query('INSERT INTO burgers SET ?', function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
    
    // Function to update data in burgers
    // How to update into burgers?
    updateOne: function (callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', function (error, result) {
            if (error) throw error;
            callback(result);
        });
    }
};

// Export the ORM object in module.exports
module.exports = orm;