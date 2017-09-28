var config = require('../../config.js').get();
var helper = require('../helpers.js')
var mysql = require('mysql');

var getDashContents = function(req,res){

    var connection = mysql.createConnection({
        host     : config.host,
        user     : config.username,
        password : config.password,
        database : config.database
      });

    connection.connect();
    connection.query('SELECT contents FROM dash_contents where user_id = \'frankchu\'', 
    function (err, rows, fields) {
      if (err) throw err
    
      req.contents = rows[0].contents;
    });
    connection.end();
}