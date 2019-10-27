'use strict';

var response = require('../res');
var connection = require('../model/conn');

exports.users = function(req, res) {
    console.log(req);
    connection.query('SELECT * FROM repartidor', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.login = function (request, res){
    console.log(request);

    var sql = 'SELECT * FROM repartidor WHERE usuarioRepartidor = ? AND passRepartidor = ?';
    connection.query(sql, [request.body.usuarioRepartidor,request.body.passRepartidor], function (err, rows,fields) {
      if (err) throw err;
      console.log(rows);
      response.ok(rows, res)
    });
}

exports.productos = function (request, res){
    console.log(request.body);

   var sql = 'SELECT * FROM productos where idRepartidor = ?';
    connection.query(sql, [request.body.idRepartidor], function (err, rows) {
        if (err) throw err;
        console.log(rows);
        response.ok(rows, res)
    });
}

exports.clientes = function (request, res){
    console.log(request.body);
    var sql = 'SELECT * FROM cliente where idRepartidor = ?';
    connection.query(sql, [request.body.idRepartidor], function (err, rows) {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    });
}
exports.citas = function (request, res){
    console.log(request.body);

    connection.query('SELECT * FROM citas where idRepartidor = ?', request.body.idRepartidor ,function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res);
        }
    });
}

exports.recuperaPass = function (request, res){
    console.log(request.body);

    connection.query('SELECT numTelRepartidor,passRepartidor FROM repartidor where usuarioRepartidor = ?', request.body.usuarioRepartidor ,function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res);
        }
    });
}

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};