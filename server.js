//Express
var express    = require('express'); 
var config     = require('./config').get();
var app        = express();

//BodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Port
var port = process.env.PORT || config.port;        // set our port

/*
    Routers
*/

var router = express.Router();              // get an instance of the express Router
app.use('/api', router);

// $/api/*
router.use(function(req, res, next) {
    console.log('Router hit: ' + req.url);
    next();
});

// $/api/
router.get('/', function(req, res) {
    res.json({ message: 'dash.api' });   
});

// $/api/dash/
require('./routes')(router);

/*
    Database
*/
var db = require('./db');

db.connect(db.SIMPLE, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        console.log('Connected to MySQL...')
    }
})

/*
    Start
*/
var server = app.listen(port, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
 })