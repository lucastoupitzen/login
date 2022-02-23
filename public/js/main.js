
$(".btn-login").on("click", autenticação)
let resposta = $(".resposta")

function autenticação() {

    const usuario = $(".usuario").val()
    const senha = $(".senha").val()

    const dados = {
        "email": usuario,
        "senha": senha
    }

    $(".loading").show() 
    
    $.get("/buscar",dados, function(data) { 

        setInterval(() => {
            $(".loading").hide()
        }, 3000)

        setTimeout(() => {
            resposta.text(data)
            resposta.show()
        }, 3000)
        
        setTimeout(() => {
            resposta.hide()
        }, 5000)
        
    }).always(function() {
        // 
    })
    
}