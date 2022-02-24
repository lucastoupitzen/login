

class Autenticação{

    init(tentativa, certo, nome, res){
        if(tentativa == certo){
            const dadosResposta = {
                nome,
                status: "Sucesso ao logar"
            }
            res.send(dadosResposta)
        } else {
            res.send("Senha incorreta, tente novamente")
        }
    }
}

module.exports = new Autenticação