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

// ** Routers **
var router = express.Router();              // get an instance of the express Router
app.use('/api', router);

// $/api/*
router.use(function(req, res, next) {
    console.log('Router hit.');
    next();
});

// $/api/
router.get('/', function(req, res) {
    res.json({ message: 'dash.api' });   
});

// $/api/dash/
require('./routes')(router);

//listen
var server = app.listen(port, function (){
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})