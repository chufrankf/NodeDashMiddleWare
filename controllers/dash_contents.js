//Database
var db = require('../db.js');

exports.findAll = function(req, res) {
    db.get().query('SELECT * FROM dash_contents', function(err, rows){
        if(err) return res.send({success: false, error: err});
        return res.send(rows);
    });
};

//Actions
exports.findById = function(req, res) {
    var id = req.query.id;
    var user = req.user_id;
    
    if(id && user){
        var sql = 'SELECT * FROM dash_contents ' +
        'WHERE dash_id = ' + db.get().escape(id) +
        '  AND user_id = ' + db.get().escape(user);

        db.get().query(sql, function(err, rows){
        if(err) return res.send({success: false, error: err});
        return res.send(rows);
        });
    }
    else{
        return res.send({success: false, error: 'Invalid request'});
    }
};
exports.add = function(req, res) {};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};