'use strict';

var response = require('../res');
var connection = require('../model/conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM repartidor', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.login = function (request, res){
    console.log(request.body);
    var sql = 'SELECT * FROM repartidor WHERE usuarioRepartidor = ? AND passRepartidor = ?';
    connection.query(sql, [request.body.usuarioRepartidor,request.body.passRepartidor], function (err, rows,fields) {
         if (err) throw err;
        console.log(err);
        response.ok(rows, res)
    });
}

exports.productos = function (request, res){
   var sql = 'SELECT * FROM productos where idRepartidor = ?';
    connection.query(sql, [request.body.idRepartidor], function (err, rows) {
        if (err) throw err;
        console.log(err);
        response.ok(rows, res)
    });
}

exports.clientes = function (request, res){
    var sql = 'SELECT * FROM cliente where idRepartidor = ?';
    connection.query(sql, [request.body.idRepartidor], function (err, rows) {
        if (err) throw err;
        console.log(err);
        response.ok(rows, res)
    });
}
exports.citas = function (request, res){
    connection.query('SELECT a.*, b.nombreCliente FROM citas a INNER JOIN cliente b on a.idCliente = b.idCliente where a.idRepartidor = ?', request.body.idRepartidor ,function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res);
        }
    });
}

exports.historialventas = function (request, res){
    //var sql = 'SELECT a.*, b.nombreCliente FROM venta a INNER JOIN cliente b on a.idCliente = b.idCliente where a.idRepartidor = ?';
    var sql = 'SELECT idVenta FROM venta where idRepartidor = ?'
    connection.query(sql, [request.body.idRepartidor], function (err, rows) {
        if (err) throw err;
        console.log(err);
        response.ok(rows, res)
    });
}

exports.ticketVentas = function (request, res){
    console.log(request.body)
    //var sql = 'SELECT a.*, b.nombreCliente FROM venta a INNER JOIN cliente b on a.idCliente = b.idCliente where a.idRepartidor = ?';
    var sql = 'SELECT a.*, b.nombreCliente FROM venta a INNER JOIN cliente b on a.idCliente = b.idCliente where a.idVenta = ?'
    connection.query(sql, [request.body.idVenta], function (err, rows) {
        if (err) throw err;
        console.log(err);
        response.ok(rows, res)
    });
}

exports.recuperaPass = function (request, res){
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