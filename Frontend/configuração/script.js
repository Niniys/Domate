var temas = ["Padrao", "Lilas", "Inverno", "RosaChoque", "Bege", "TempodeChuva", "Limonada", "CeuLimpo", "Frutose", "Roxo"];
var indexTema = -1;

function loadtema() {
  var temaSelecionado = parseInt(localStorage.getItem("temaselecionado"));
  localStorage.setItem(temas[temaSelecionado], "enabled");
  document.body.classList.add(temas[temaSelecionado]);
}

function setTema() {
  var temaSelecionado = localStorage.getItem("temaselecionado");
  if (temaSelecionado !== null) {
      indexTema = Integer.parseInt(temaSelecionado);
  }
}

function get() {
  let user = document.getElementById("user");
  let username = JSON.parse(localStorage.getItem("userdata"));

  if(username.nome_usuario != null) {
    user.innerHTML = username.nome_usuario;
  }
}