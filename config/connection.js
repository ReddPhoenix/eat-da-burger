// Setup code to connect Node to MySQL
const mysql = require("mysql");

require('dotenv').config();

let connection;

if (process.env.JAWSDB_URL) {
    // use jaws db
    console.log('==========hit===connection.js==top');
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    // use local connection
    // Connection to mysql
    console.log('==hit==connection.js==mysql')
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASS,

        database: "burgers_db"
    });
}


connection.connect(function (error) {
    console.log('====hit===connection.js===')
    if (error) throw error;
});

// Export in module.exports
module.exports = connection;