class ProdutoDAO{

    constructor(con){
        this.con = con 
    }

    getProdutos(){ 
        return new Promise((resolve, reject) => {
            this.con.query(`SELECT * FROM produtos`,(erro, resultados) => {
                    if (erro) return reject(this.obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }


    getProduto(id){ 
        return new Promise((resolve, reject) => {
            
            this.con.query(`SELECT * FROM produtos where id = "${id}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }

    addProduto(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`INSERT INTO produtos (id, nome, descricao, preco, qtd_estoque) VALUES ("${dados.id}","${dados.nome}", "${dados.descricao}", "${dados.preco}", "${dados.qtd_estoque}");`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    atualizaProduto(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`UPDATE produtos SET nome = "${dados.nome}", descricao = "${dados.descricao}", preco = "${dados.preco}", qtd_estoque = "${dados.qtd_estoque}" WHERE id = "${dados.id}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    removeProduto(id){
        return new Promise((resolve, reject) => {
            this.con.query(`DELETE FROM produtos WHERE id = "${id}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }
}


module.exports = ProdutoDAO