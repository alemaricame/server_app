'use strict';

module.exports = function(app) {
    var todoList = require('../controller/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);
    
    app.route('/login')
        .post(todoList.login);

    app.route('/productos')
        .post(todoList.productos);

    app.route('/clientes')
        .post(todoList.clientes);

    app.route('/citas')
        .post(todoList.citas);
    
    app.route('/recuperaPass')
        .post(todoList.recuperaPass);

};