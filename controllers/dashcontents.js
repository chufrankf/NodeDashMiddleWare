exports.findAll = function(req, res) {
    res.send([{
        "id": 1,
        "name": "Max",
        "band": "Maximum Pain",
        "instrument": "guitar"
      }]);
};
exports.findById = function(req, res) {};
exports.add = function(req, res) {};
exports.update = function(req, res) {};
exports.delete = function(req, res) {};