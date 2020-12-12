const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

// Express assigned to app variable
// const app = express();

// Variable assigned to PORT for server
// const PORT = process.env.PORT || 3000;

// GET, POST, PUT routes
router.get('/', (req, res) => {
    console.log("================= hit ============")
    burger.selectAll((data) => {
        res.render('index', { burgers: data });
    });
});

router.post('/burgers', (req, res) => {
    burger.insertOne(['burger_name'], [req.body.burger_name], data => {
        res.redirect('/');
    });
});

// router.put('burgers/:id', (req, req) => {
router.put('burgers/:id', (data) => {
    burger.updateOne({ devoured: true }, 'id = ' + req.params.id, (data) => {
        res.redirect('/');
    });
})

//  Added listener for assigned PORT for server
// app.listen(PORT, () => {
//     console.log("App running on PORT " + PORT);
// });


// Export in module.exports
module.exports = router;