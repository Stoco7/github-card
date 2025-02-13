function fnCarregarDados() {

const url = "https://api.github.com/users/Stoco7"

fetch(url)
  .then(resposta => {
    return resposta.json()
  })
.then(dados => {
    fnCarregarDados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.html_url, dados.blog)
  })
}

function fnMostrarDados(foto, nome, resumo, email, github, instagram, blog){
  document.getElementById("foto").src = foto
  document.getElementById("nome").innerHTML = nome
  document.getElementById("resumo").innerHTML = resumo + "<br><strong id = 'email'></strong>"
  document.getElementById("email").innerHTML = email
  document.getElementById("github").href = github
  document.getElementById("instagram").href = instagram
  document.getElementById("blog").href = blog
}

let botao = document.getElementById("botao-carregar-dados")
botao.addEventListener("click", function(){
  fnCarregarDados()
})

