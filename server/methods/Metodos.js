const conexao = require("../databaseConfig/conexao.js")
const Autenticação = require("../methods/Autenticação.js")
const SenhaSegura = require("../methods/criarSenha.js")

class Metodos{

    async buscar(email, senha, res){
        
        const sql = `SELECT * FROM Logindef WHERE email="${email}"`

        // const senhaHash = await SenhaSegura.criarHash(senha)

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.send("Erro no servidor")
            } else{
                if(resultado.length == 0){
                    res.send("Email não cadastrado")
                }else{
                    
                    const login = resultado[0].senha

                    const nome = resultado[0].nome

                    Autenticação.comparar(senha, login, nome, res)
                }
                
            }
        })
    }

    async cadastrar(nome,email,senha,res){

        //verificar email já existente
        const sql1 = `SELECT * FROM Logindef WHERE email="${email}"`

        const senhaHash = await SenhaSegura.criarHash(senha)

        conexao.query(sql1, (erro, resultado) => {
            if(erro){
                res.send("Erro no servidor")
            }else{
                // se o email ainda não foi cadastrado
                if(resultado.length == 0 ){
                    const sql = `INSERT INTO Logindef SET ?`

                    let lista = {
                        nome,
                        email,
                        senha: senhaHash
                    }
            
                    conexao.query(sql,lista, (erro, resultado) => {
                        if(erro){
                            res.status(400)
                            res.send("Erro ao cadastrar")
                        } else {
                            const dadosResposta = {
                                nome,
                                status: "Sucesso ao cadastrar"
                            }
                            res.send(dadosResposta)
                        }
                    })
                } else {
                    // se o email já estava cadastrado
                    res.send("Email já cadastrado")
                } 
            }
        })


    } 


    async corrigirSenha(email, novaSenha, res){

        const novaSenhaHash = await SenhaSegura.criarHash(senha)

        const sql = `UPDATE Logindef SET senha = "${novaSenhaHash}" WHERE email = "${email}"`

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