const {check, validationResult} = require('express-validator')

class ProdutoModel{
    static validacoes(){
        return [
            [
                check('preco', ).isNumeric().isFloat().withMessage('Campo PRECO invalido')
                                .not().isEmpty().withMessage('Campo PRECO deve ser preenchido'),
                check('qtd_estoque', ).isInt().withMessage('Campo QUANTIDADE ESTOQUE invalido')
                                      .not().isEmpty().withMessage('Campo QUANTIDADE ESTOQUE deve ser preenchido'),
            ]
        ]
    }
}
module.exports = ProdutoModel