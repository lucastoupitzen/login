const bcrypt = require("bcrypt")

class SenhaSegura {

    async criarHash(senha) {

        const custoHash = 12
        const novaSenha = await bcrypt.hash(senha, custoHash)

        return novaSenha
    }


}

module.exports = new SenhaSegura
