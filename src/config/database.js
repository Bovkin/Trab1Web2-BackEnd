var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

//Função para fazer a conexão
con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado ao Banco de Dados");
});

//Definindo o esquema a ser utilizado
con.query('use trab1;', function (err, result) {
    if (err) throw err;
    console.log('Usando trab1')
});
  
module.exports = con 