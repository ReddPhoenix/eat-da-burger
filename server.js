// Module requirements for Express
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./controllers/burgers_controller');


// Express assigned to app variable
const app = express();

// Variable assigned to PORT for server
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


// Initialize & setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Route to access burgers_controller.js
app.use('/', router);

//  Added listener for assigned PORT for server
app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));