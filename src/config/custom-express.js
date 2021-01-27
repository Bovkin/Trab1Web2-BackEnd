const express = require('express')
const bodyParser = require('body-parser')
const rotasClientes = require('../app/rotas/rota-clientes')
const rotasProdutos = require('../app/rotas/rota-produtos')
const rotasCompras = require('../app/rotas/rota-compras')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

rotasClientes(app)
rotasProdutos(app)
rotasCompras(app)

app.use(function(req, resp, next){
    resp.status(404).end('Pagina nao encontrada')
})

app.use(function(req, resp, next){
    resp.status(500).end('Houve um erro com o servidor')
})

app.use(function(req, resp, next){
    resp.status(200).end('Sucesso')
})

module.exports = app