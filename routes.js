module.exports = function(app){
    //Dash Contents
    var dashcontents = require('./controllers/dashcontents');
    app.get('/dashcontents', dashcontents.findAll);
    app.get('/dashcontents/:id', dashcontents.findById);
    app.post('/dashcontents', dashcontents.add);
    app.put('/dashcontents/:id', dashcontents.update);
    app.delete('/dashcontents/:id', dashcontents.delete);

    //Add additional controllers here
}