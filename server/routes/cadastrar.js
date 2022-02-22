const Metodos = require("../methods/Metodos")

module.exports = app => {
    app.post("/cadastro", (req, res) => {

        const parametros = req.body

        Metodos.cadastrar(parametros.nome, parametros.email, parametros.senha, res)
    })
}