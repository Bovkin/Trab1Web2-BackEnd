const { check, validationResult } = require('express-validator')

class CompraController {

    rotasCompra(){
        return {
            base: '/compras',
            getCPF: '/compras/:cpf_cliente'
        }
    }

    listar() {
        return function (req, resp) {
            compraDAO.getCompras().then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    obter() {
        return function (req, resp) {
            const errosVal = validationResult(req).array()
            if (errosVal.length != 0) {
                resp.json({ erros: errosVal })
            } else {
                compraDAO.getCompra(req.params.cpf_cliente).then(result => resp.json(result)).catch(err => resp.json(err))
            }
        }
    }
    adicionar() {
        return function(req, resp){
            compraDAO.addCompra(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    remover() {
        return function(req, resp){
            compraDAO.removeCompra(req.body.idcompra).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    atualizar() {
        return function(req,resp){
            compraDAO.atualizaCompra(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }

}

module.exports = CompraController