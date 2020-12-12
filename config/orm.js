// Import (require) connection.js into orm.js

const connection = require('../config/connection');


// Methods to retrieve and store data in database
const orm = {

    // Function to return all from burgers
    selectAll: (callback) => {
        connection.query('SELECT * FROM burgers', (error, result) => {
                if (error) throw error;
                callback(result); 
            });
    },
    
    // Function to insert into burgers
    insertOne: (burger_name, callback) => {
        connection.query('INSERT INTO burgers SET ?', { burger_name: burger_name, devoured: false }, (error, result) => {
                if (error) throw error;
                callback(result);
            });
    },
    
    // Function to update data in burgers
    updateOne: (idBurger, callback) => {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: idBurger }], (error, result) => {
                if (error) throw error;
                callback(result);
            });

    }

};

// Export the ORM object in module.exports
module.exports = orm;