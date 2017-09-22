// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Call the allowed functions
var dash = require('./app/models/dash_contents');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('I have been hit!');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'dash.api' });   
});

// more routes for our API will happen here
router.post('/dash', function(req, res){
    res.send('POST request to the dash')
});
router.get('/dash',function(req, res){
    console.log("Fetching dash... ",req.contents); 
    res.status(200).send(req.contents);
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);