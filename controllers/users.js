//Database
var db = require('../db.js');

//For Encryption Token
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config').get();

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
    
    var user = req.body.user_id;
    var email = req.body.email;
    var pass = req.body.password;

    if(user && email && pass){
        var values = [user, email, bcrypt.hashSync(req.body.password, 6)];
        var sql = 'INSERT INTO users (user_id, email, pass) ' +
                  'VALUES (?,?,?)';
        
        db.get().query(sql, values, function(err, rows){
            if(err) return res.send(err);

            //Create and send token
            var token = jwt.sign({id: user}, config.token_key, {expiresIn: config.token_length});
            return res.send({auth: true, token: token});
        });
    }
    else{
        return console.log('Invalid request');
    }
    
};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};