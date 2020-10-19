// Module requirement for Express
const express = require('express');

// Express assigned to app variable
const app = express();

// Variable assigned to PORT for server
const PORT = process.env.PORT || 3000;

//  Added listener for assigned PORT for server
app.listen(PORT, () => {
    console.log("App running on PORT " + PORT);
});
