const ClienteDAO = require('../dao/clienteDAO')
const con = require('../../config/database')
const ClienteModel = require('../model/model-cliente')
const {check, validationResult} = require('express-validator')
const ClienteController = require('../controller/clienteController')

clienteController = new ClienteController()

rotasClientes = clienteController.rotasCliente()

clienteDAO = new ClienteDAO(con)

module.exports = (app) => {

    app.get(rotasClientes.getCPF, [
        check('cpf', 'Tamanho do CPF invalido').isLength({min: 11, max: 11})
    ], clienteController.obter())

    app.route(rotasClientes.base)
    .get(clienteController.listar())
    .post(ClienteModel.validacoes(), clienteController.adicionar())
    .delete(clienteController.remover())
    .put(clienteController.atualizar())

}

