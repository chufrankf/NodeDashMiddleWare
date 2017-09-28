var mysql = require('mysql');
var config = require('../../config.js').get();

function getDashContents(user, callback) {

    // This is temporary, later will need to configure user login capability
    var connection = mysql.createConnection({
        host     : config.host,
        user     : config.username,
        password : config.password,
        database : config.database
      });

    // Connect to the database
    connection.connect();

    // Query the database
    var results;
    connection.query('SELECT contents FROM dash_contents where user_id = \'' + user + '\'', 
    function (err, rows, fields) {
      if (err) throw err
    
      results = rows[0].contents;
    });

    // End the connection
    connection.end();

    

}