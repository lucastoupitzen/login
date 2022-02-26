$(".btn-login").on("click", confirmaDados)
let resposta = $(".resposta")

function cadastro() {

    const email = $(".email").val()
    const senha = $(".senha").val()

    const dados = {
        "email": email,
        "senha": senha
    }
    resposta.hide()
    $(".loading").show()

    $.ajax({
        url: '/novasenha',
        type: 'PUT',
        data: dados,
        success: function(data) {
            if(data == "Senha alterada com sucesso!"){
                resposta.text("Senha alterada com sucesso!")
                setInterval(() => {
                    $(".loading").hide()
                    window.location.assign("/index.html")
                }, 3000)
                
            } else {
                setTimeout(() => {
                    $(".loading").hide()
                }, 3000)
    
                setTimeout((data) => {
                    resposta.text(data)
                    resposta.show()
                }, 3000)
                
                setTimeout(() => {
                    resposta.hide()
                }, 5000)
            }
    
        }
    });

}

// confirma se as senhas são iguais antes de enviar ao cadastro
function confirmaSenha() {
    const senha = $(".senha").val()
    const senhaConfirmada = $(".confimar-senha").val()
    
    if(senha.length < 8){
        resposta.text("Senha insuficiente. Mínimo de 8 caracteres.")
        resposta.show()
        setTimeout(() => {
            resposta.hide()
        }, 3000)
        return
    }

    if(senha == senhaConfirmada) {
        cadastro()
    } else {
        resposta.text("Divergência na confirmação da senha")
        resposta.show()
        setTimeout(() => {
            resposta.hide()
        }, 3000)
    }
}

function confirmaDados(){
    const email = $(".email").val()
    const senha = $(".senha").val()
    if(email.length == 0|| senha.length == 0){
        resposta.text("Preencha todos os campos...")
        resposta.show()
        setTimeout(() => {
            resposta.hide()
        }, 3000)

    } else {
        confirmaSenha()
    }
}