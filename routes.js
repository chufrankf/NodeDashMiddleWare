module.exports = function(app){
    //Dash Contents
    var dashcontents = require('./controllers/dash_contents');
    app.get('/cont/getall', dashcontents.findAll);
    app.get('/cont/get', dashcontents.findById);
    app.post('/cont/update', dashcontents.update);
    app.delete('/cont/delete/:id', dashcontents.delete);

    //Users
    var users = require('./controllers/users');
    app.get('/user/get/:id', users.findById);
    app.post('/user/add', users.add);
    app.delete('/user/delete/:id', users.delete);

    //Add additional controllers here
}