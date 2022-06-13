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