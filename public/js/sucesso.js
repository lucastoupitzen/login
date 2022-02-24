$(
    function() {
        atualizaNomeLogado()
    }
)

function atualizaNomeLogado() {

    let nomeLogado = JSON.parse(localStorage.getItem("usuarioLogado"))

    var nomePagina = filtraNome(nomeLogado.nome)

    $(".nome-logado").text(nomePagina)


}

function filtraNome(nomeLogado) {


    let lista = []
    for(i=0; i <= nomeLogado.length; i++){

        if(nomeLogado[i] != " "){
            lista.push(nomeLogado[i])
        }else {
            break
        }
    }
    return lista.join("")

}