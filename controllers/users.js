//Database
var db = require('../db.js');

//For Encryption Token
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

//Actions
exports.findById = function(req, res) {
    var id = req.params.id
    if(id){
        var sql = 'SELECT * FROM users ' +
        'WHERE user_id = ' + db.get().escape(id);

        db.get().query(sql, function(err, rows){
        if(err) return console.log(err);
        return res.send(rows);
        });
    }
    else{
        return console.log('Invalid request');
    }
};
exports.add = function(req, res) {
    var hashpass = bcrypt.hashSync(req.body.password, 6);
    
};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};