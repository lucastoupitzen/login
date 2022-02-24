
$(".btn-login").on("click", autenticação)
let resposta = $(".resposta")

function autenticação() {

    const usuario = $(".usuario").val()
    const senha = $(".senha").val()

    const dados = {
        "email": usuario,
        "senha": senha
    }

    resposta.hide()

    $(".loading").show() 
    
    $.get("/buscar",dados, function(data) { 

        if(data.status == "Sucesso ao logar"){
            setInterval(() => {
                $(".loading").hide()
                window.location.assign("/sucesso.html")
            }, 3000)
            
        } else {
            setTimeout(() => {
                $(".loading").hide()
            }, 3000)

            setTimeout(() => {
                resposta.text(data)
                resposta.show()
            }, 3000)
            
            setTimeout(() => {
                resposta.hide()
            }, 5000)
        }

        localStorage.setItem("usuarioLogado", JSON.stringify(data))
    })
    
}