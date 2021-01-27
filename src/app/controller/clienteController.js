const { check, validationResult } = require('express-validator')

class ClienteController {

    rotasCliente(){
        return {
            base: '/clientes',
            getCPF: '/clientes/:cpf'
        }
    }

    listar() {
        return function (req, resp) {
            clienteDAO.getClientes().then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    obter() {
        return function (req, resp) {
            const errosVal = validationResult(req).array()
            if (errosVal.length != 0) {
                resp.json({ erros: errosVal })
            } else {
                clienteDAO.getCliente(req.params.cpf).then(result => resp.json(result)).catch(err => resp.json(err))
            }

        }
    }
    adicionar() {
        return function(req, resp) {
            const errosVal = validationResult(req).array()
            if (errosVal.length != 0) {
                resp.json({ erros: errosVal })
            } else {
                clienteDAO.addCliente(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
            }
        }
    }
    remover() {
        return function(req, resp){
            clienteDAO.removeCliente(req.body.cpf).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    atualizar() {
        return function(req,resp){
            clienteDAO.atualizaCliente(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }

}

module.exports = ClienteController