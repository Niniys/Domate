let dicasObject = [
    {
        dica: "aaaaaaaaaa"
    },
    // {
    //     dica: "bbbbbbbbb"
    // }
]

let mainDica = 0

function loadDica() {
    let texto = document.createElement("div");
    let dica = document.querySelector(".dicas");

    texto.setAttribute("class","texto");
    texto.innerHTML = dicasObject[mainDica].dica
    dica.appendChild(texto)
}