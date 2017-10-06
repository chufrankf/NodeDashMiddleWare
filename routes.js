module.exports = function(app){
    //Authorization
    var auth = require('./controllers/auth');
    
    //Dash Contents
    var dashcontents = require('./controllers/dash_contents');
    app.get('/cont/getall', auth.verifyToken, dashcontents.findAll);
    app.get('/cont/get', auth.verifyToken, dashcontents.findById);
    app.post('/cont/update', auth.verifyToken, dashcontents.update);
    app.delete('/cont/delete/:id', auth.verifyToken, dashcontents.delete);

    //Users
    var users = require('./controllers/users');
    app.get('/user/get', auth.verifyToken, users.findById);
    app.delete('/user/delete', auth.verifyToken, users.delete);

    //No -authorization
    app.post('/user/add', users.add);
    app.put('/user/login', users.login);
    app.put('/user/logout', users.logout);

    //Add additional controllers here
}