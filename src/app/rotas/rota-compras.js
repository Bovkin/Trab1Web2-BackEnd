const CompraDAO = require('../dao/compraDAO')
const con = require('../../config/database')
const ComprasModel = require('../model/model-compras')
const {check, validationResult} = require('express-validator')
const CompraController = require('../controller/compraController')
const CompraModel = require('../model/model-compras')

compraController = new CompraController()

rotasCompras = compraController.rotasCompra()

compraDAO = new CompraDAO(con)

module.exports = (app) => {

    app.get(rotasCompras.getCPF, [
        check('cpf_cliente', 'Tamanho do CPF invalido').isLength({min: 11, max: 11})
    ], compraController.obter())

    app.route(rotasCompras.base)
    .get(compraController.listar())
    .post(CompraModel.validacoes(), compraController.adicionar())
    .delete(compraController.remover())
    .put(compraController.atualizar())
    
}