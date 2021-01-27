class CompraDAO{

    constructor(con){
        this.con = con 
    }

    getCompras(){ 
        return new Promise((resolve, reject) => {
            this.con.query(`SELECT * FROM compras`,(erro, resultados) => {
                    if (erro) return reject(this.obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }


    getCompra(cpf_cliente){ 
        return new Promise((resolve, reject) => {
            this.con.query(`SELECT * FROM compras where cpf_cliente = "${cpf_cliente}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }

    addCompra(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`INSERT INTO compras (idproduto, qtd_comprada, cpf_cliente) values ("${dados.idproduto}","${dados.qtd_comprada}","${dados.cpf_cliente}");`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    atualizaCompra(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`UPDATE compras SET idproduto = "${dados.idproduto}", qtd_comprada = "${dados.qtd_comprada}" WHERE idcompra = "${dados.idcompra}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    removeCompra(idcompra){
        return new Promise((resolve, reject) => {
            this.con.query(`DELETE FROM compras WHERE idcompra = "${idcompra}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }
}


module.exports = CompraDAO