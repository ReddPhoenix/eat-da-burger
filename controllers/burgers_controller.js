const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//  ROUTES

router.get('/', (req, res) => {
    console.log('==hit==burger_controllers.js===/')
        res.redirect('/index');
    });

router.get('/index', (req, res) => {
    burger.selectAll((data) => {
        console.log('==hit==burger_controllers.js===index')
        let hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

//create Burger
router.post('/burger/create', (req, res) => {
    console.log('==hit==burger_controllers.js===create burger')
    burger.insertOne(req.body.burger_name, () => {
        res.redirect('/index');
    });
});

//eat burger
router.post('/burger/eat/:id', (req, res) => {
    console.log('==hit==burger_controllers.js===eat burger')
        burger.updateOne(req.params.id, () => {
                res.redirect('/index');
            });
    });



// Export in module.exports
module.exports = router;