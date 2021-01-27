const {check, validationResult} = require('express-validator')

class CompraModel{
    static validacoes(){
        return [
            [
                check('cpf_cliente', ).isLength({min: 11, max: 11}).withMessage('Tamanho do CPF invalido')
                                      .not().isEmpty().withMessage('CPF invalido'),
                check('qtd_comprada', ).isInt().withMessage('Campo QUANTIDADE COMPRADA invalido')
                                       .not().isEmpty().withMessage('Campo QUANTIDADE deve ser preenchido'),
            ]
        ]
    }
}
module.exports = CompraModel