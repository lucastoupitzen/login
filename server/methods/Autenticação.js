const bcrypt = require("bcrypt")

class Autenticação{

    // usando o hash

    async comparar(tentativa, certo, nome, res) {

        await bcrypt.compare(tentativa, certo, (erro, resultado) => {
            if(resultado == true) {
                const dadosResposta = {
                    nome,
                    status: "Sucesso ao logar"
                }
                res.send(dadosResposta)
            } else {
                res.send("Senha incorreta, tente novamente")
            }
        })

    }
}

module.exports = new Autenticação