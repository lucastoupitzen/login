const bcrypt = require("bcrypt")

class SenhaSegura {

    hash(senha) {

        custoHash = 12
        const novaSenha = bcrypt.hash(senha, custoHash)

        return novaSenha

    }

}

module.exports = new SenhaSegura
