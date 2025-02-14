function fnCarregarDados(usuario){

  const url = "https://api.github.com/users/" + usuario
  console.log(url)
  // const url = "dados.json";

  fetch(url)
    .then(resposta => {
      return resposta.json()
    })
    .then(dados => {
      fnMostrarDados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.html_url, dados.twitter_username)
    })
}

function fnMostrarDados(foto, nome, resumo, email, github, instagram, twitter) {
  document.getElementById("foto").src = foto
  document.getElementById("nome").innerHTML = nome
  document.getElementById("resumo").innerHTML = resumo + "<br><strong id = 'email'></strong>"
  document.getElementById("email").innerHTML = email
  document.getElementById("github").href = github
  document.getElementById("instagram").href = "https://instagram.com/" + instagram
  document.getElementById("twitter").href = "https://x.com/" + twitter

  if (twitter == null) {
    document.getElementById("twitter").style.display = "none"
  }else{
    document.getElementById("twitter").style.display = "inline"
  }

  if (instagram == null){
    document.getElementById("instagram").style.display = "none"
  }else{
    document.getElementById("instagram").style.display = "inline"
  }
}

let botaoCarregar = document.getElementById("botao-carregar-dados")
let botaoVoltar = document.getElementById("botao-voltar")
botaoCarregar.addEventListener("click", function () {
  fnCarregarDados(document.getElementById("usuario").value)
  document.getElementById("espaco-cartao").style.display = "block"
  document.getElementById("espaco-botao").style.display = "none"


})

botaoVoltar.addEventListener("click", function () {
  fnCarregarDados()
  document.getElementById("espaco-cartao").style.display = "none"
  document.getElementById("espaco-botao").style.display = "block"
})

