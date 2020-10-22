// Module requirements for Express
const express = require('express');
const exphbs = require('express-handlebars');

// Express assigned to app variable
const app = express();

// Variable assigned to PORT for server
const PORT = process.env.PORT || 3000;

// Initialize & setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Route to index.handlebars
app.get('/', (req, res) => {
    res.render('index');
});

//  Added listener for assigned PORT for server
app.listen(PORT, () => {
    console.log("App running on PORT " + PORT);
});
