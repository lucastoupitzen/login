const Metodos = require("../methods/Metodos.js")


module.exports = app => {

    app.get("/buscar", (req, res) => {
        
        const parametros = req.query

        Metodos.buscar(parametros.email, parametros.senha, res)

    })
}