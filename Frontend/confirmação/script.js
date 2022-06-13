var exxx = document.getElementById("aaa");
var host = localStorage.getItem("userdata");

exxx.addEventListener("click", () => {
    fetch("http://10.87.207.4:3000/nota/" + host.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            "body": data
        })
        .then(response => { return response.json() })
        .then(data => {
            alert(data + "Excluído com sucesso")
        })
})

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