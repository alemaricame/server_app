var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// CORS , aqui esta abierto para todos
app.all('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


var routes = require('./routes/routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);