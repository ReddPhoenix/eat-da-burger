// Setup code to connect Node to MySQL

const mysql = require("mysql");

require('dotenv').config();

// Connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "roster_db",
});

connection.connect(function (error) {
    if (error) throw error;
});