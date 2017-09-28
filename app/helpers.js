var http = require("http")

/*
 Public Methods
*/

// Create error codes
exports.make_error = (code, msg) => {
    var e = new Error(msg);
    e.code = code;
    return e;
}

// Send a failure message
exports.send_failure = (res, server_code, err) => {
    res.writeHead(server_code, {"Content-Type" : "application/json"});
    res.end(make_resp_error(err));
}

// Send the success results
exports.send_success = (res, data) => {
    res.writeHead(200, {"Content-Type" : "application/json"});
    var output = { error: null, data: data};
    res.end(JSON.stringify(output) + "\n");
}

/*
 Private Methods
*/
var make_resp_error = (err) => {
    return JSON.stringify({ code: (err.code) ? err.code : err.Name,
            message: err.message});
}
