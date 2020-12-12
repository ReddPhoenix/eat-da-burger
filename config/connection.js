// Setup code to connect Node to MySQL

const mysql = require("mysql");

require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
    // use jaws db
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // use local connection
    // Connection to mysql
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASS,
        database: "burgers_db",
    });
}


connection.connect(function (error) {
    if (error) throw error;
});

// Export in module.exports
module.exports = connection;