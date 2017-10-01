module.exports = function(app){
    //Dash Contents
    var dashcontents = require('./controllers/dash_contents');
    app.get('/getcontents', dashcontents.findAll);
    app.get('/getusercontents', dashcontents.findByPk);
    app.post('/dashcontents', dashcontents.add);
    app.put('/dashcontents/:id', dashcontents.update);
    app.delete('/dashcontents/:id', dashcontents.delete);

    //Add additional controllers here
}