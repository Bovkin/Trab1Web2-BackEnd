const ProdutoDAO = require('../dao/produtoDAO')
const con = require('../../config/database')
const ProdutoModel = require('../model/model-produtos')
const ProdutoController = require('../controller/produtoController')
const {check, validationResult} = require('express-validator')

produtoController = new ProdutoController()

rotasProdutos = produtoController.rotasProduto()

produtoDAO = new ProdutoDAO(con)

module.exports = (app) => {

    app.get(rotasProdutos.getID, [
        check('id', 'Compra ID invalido').isNumeric().isInt()
    ], produtoController.obter())

    app.route(rotasProdutos.base)
    .get(produtoController.listar())
    .post(ProdutoModel.validacoes(), produtoController.adicionar())
    .delete(produtoController.remover())
    .put(produtoController.atualizar())

}