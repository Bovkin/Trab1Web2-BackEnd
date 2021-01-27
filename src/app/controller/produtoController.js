const {check, validationResult} = require('express-validator')

class ProdutoController{

    rotasProduto(){
        return {
            base: '/produtos',
            getID: '/produtos/:id'
        }
    }

    listar(){
        return function(req, resp){
            produtoDAO.getProdutos().then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    obter(){
        return function(req, resp){
            const errosVal = validationResult(req).array()
            if(errosVal.length != 0){
                resp.json({erros : errosVal})
            }else{
                produtoDAO.getProduto(req.params.id).then(result => resp.json(result)).catch(err => resp.json(err))
            }
        }
    }
    adicionar(){
        return function(req, resp){
            const errosVal = validationResult(req).array()
            if(errosVal.length != 0){
                resp.json({erros : errosVal})
            }else{
                produtoDAO.addProduto(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
            }
        }
    }
    remover(){
        return function(req, resp){
            produtoDAO.removeProduto(req.body.id).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }
    atualizar(){
        return function(req,resp){
            produtoDAO.atualizaProduto(req.body).then(result => resp.json(result)).catch(err => resp.json(err))
        }
    }

}

module.exports = ProdutoController