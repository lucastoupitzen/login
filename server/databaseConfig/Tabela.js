
class Tabela {

    criaTabela(conexao) {

        this.conexao = conexao

        const sql = 'CREATE TABLE IF NOT EXISTS Logindef (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(70), senha varchar(300), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }else{
                console.log("Banco de dados operando normalmente")
            }
        })
    }
}

module.exports = new Tabela