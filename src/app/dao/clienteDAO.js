class ClienteDAO{

    constructor(con){
        this.con = con 
    }

    getClientes(){ 
        return new Promise((resolve, reject) => {
            this.con.query(`select * from clientes`,(erro, resultados) => {
                    if (erro) return reject(this.obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }


    getCliente(cpf){ 
        return new Promise((resolve, reject) => {
            this.con.query(`select * from clientes where cpf = "${cpf}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(resultados);
                }
            )
        })
    }

    addCliente(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`insert into clientes (nome, telefone, cpf, email, cep, rua, numero, cidade) values ("${dados.nome}","${dados.telefone}", "${dados.cpf}", "${dados.email}", "${dados.cep}", "${dados.rua}", "${dados.numero}", "${dados.cidade}");`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    atualizaCliente(dados){
        return new Promise((resolve, reject) => {
            this.con.query(`update clientes SET nome = "${dados.nome}", telefone = "${dados.telefone}", cpf = "${dados.cpf}", email = "${dados.email}", cep = "${dados.cep}", rua = "${dados.rua}", numero = "${dados.numero}", cidade = "${dados.cidade}" WHERE cpf = "${dados.cpf}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }

    removeCliente(cpf){
        return new Promise((resolve, reject) => {
            this.con.query(`delete FROM clientes WHERE cpf = "${cpf}";`,(erro, resultados) => {
                    if (erro) return reject(obj_erro);
                    return resolve(this.obj_sucesso);
                }
            )
        })
    }
}


module.exports = ClienteDAO