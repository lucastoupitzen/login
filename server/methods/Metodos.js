const conexao = require("../databaseConfig/conexao.js")
const Autenticação = require("../methods/Autenticação.js")

class Metodos{

    buscar(email, senha, res){
        
        const sql = `SELECT * FROM Login WHERE email="${email}"`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.send("Tente novamente")
            } else{
                if(resultado.length == 0){
                    res.send("Tente novamente")
                }else{
                    
                    const login = resultado[0].senha

                    Autenticação.init(senha, login, res)}
                
            }
        })


    }

    cadastrar(nome,email,senha,res){

        const sql = `INSERT INTO Login SET ?`

        let lista = {
            'nome': nome,
            "email": email,
            "senha": senha
        }

        conexao.query(sql,lista, (erro, resultado) => {
            if(erro){
                res.status(400)
                res.send(erro)
            } else {
                res.send(resultado)
            }
        })
    }

    corrigirSenha(email, novaSenha, res){

        const sql = `UPDATE Login SET senha = "${novaSenha}" WHERE email = "${email}"`

        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.send("Não foi possíver alterar a senha.")
            }else{
                res.send("Senha alterada com sucesso!")
            }

        })

    }
}

module.exports = new Metodos