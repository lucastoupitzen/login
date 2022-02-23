const Metodos = require("../methods/Metodos")

module.exports = app => {

    app.put("/novasenha", (req, res) => {

        const parametros = req.body.params

        Metodos.corrigirSenha(parametros.email, parametros.senha, res)
    })
}