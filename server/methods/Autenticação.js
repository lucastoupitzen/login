

class Autenticação{

    init(tentativa, certo, res){
        if(tentativa == certo){
            res.send("Sucesso ao logar")
        } else {
            res.send("Senha incorreta, tente novamente")
        }
    }
}

module.exports = new Autenticação