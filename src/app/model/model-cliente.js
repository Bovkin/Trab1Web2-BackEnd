const {check, validationResult} = require('express-validator')

class ClienteModel{
    static validacoes(){
        return [
            [
                check('cpf', ).isLength({min: 11, max: 11}).withMessage('Tamanho do CPF invalido')
                              .trim().not().isEmpty().withMessage('Campo CPF deve ser preenchido'),
                check('nome', ).isLength({min: 5, max: 45}).withMessage('Tamanho do NOME invalido')
                               .trim().not().isEmpty().withMessage('Campo NOME deve ser preenchido'),
                check('cidade', 'Campo CIDADE deve ser preenchido').trim().not().isEmpty(),
                check('estado', 'Campo ESTADO deve ser preenchido').trim().not().isEmpty(),
                check('telefone', 'Tamanho do TELEFONE invalido').isLength({min: 8, max: 10}),
                check('email', 'Campo EMAIL invalido').normalizeEmail().isEmail(),
                check('numero', 'Campo NUMERO invalido').isInt()
            ]
        ]
    }
}
module.exports = ClienteModel