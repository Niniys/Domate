let dicasObject = [
    {
        dica: "aaaaaaaaaa"
    },
    // {
    //     dica: "bbbbbbbbb"
    // }
]

function loadDica() {
    let texto = document.createElement("textarea");
    let dica = document.querySelector(".dicas");

    texto.setAttribute("class","texto");
    texto.innerHTML = dicasObject[0]
    dica.appendChild(texto)
}