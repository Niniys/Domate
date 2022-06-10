let dicasObject = [
    {
        dica: "Organize o espaço de estudo. Qualquer mesa ou escrivaninha com um mínimo de espaço já serve para quem quer estudar. O importante é que esse ambiente seja iluminado, organizado e sem distrações." + 
        "<br />" + "Mais uma vez, ponha por perto tudo o que você vai usar: caderno, fihário, apostilas, caneta, etc." + "<br />" +
        "O simples fato de ter que procurar por uma caneta já pode desviar a sua atenção para outras coisas." + "<br />" +
        "Você pode adaptar esse espaço de acordo com o seu estilo pessoal. Por exemplo: muita gente gosta de estudar em bibliotecas e outros lugares públicos."
    },
    {
        dica: "Vai ser bem mais fácil trabalhar e não houver distrações por perto. Peça a cooperação das pessoas à sua volta, desligue a televisão, coloque o celular no silencioso e por aí vai."
    },
    {
        dica: "Arrume a bagunça à sua volta antes de começar a estudar para valer." + "<br />" + 
        "A verdade é que ninguém consegue focar em mais de uma tarefa ao mesmo tempo."
    },
    {
        dica: "O acúmulo de informações recebidas todos os dias a todo momento impacta a forma como o corpo humano lida com o foco e a concentração. Apenas o ato de olhar o celular pode desencadear toda uma cadeia de distrações que tiram o foco da tarefa principal."
    },
    {
        dica: "A hora do estudo deve ser sagrada, por isso, afaste tudo que possa lhe chamar a atenção e desviar o foco. Se possível, desligue ou mantenha no silencioso aparelhos telefônicos, feche páginas da internet alheias ao conteúdo de estudo, desligue a televisão."
    }
]

function loadDica() {
    let texto = document.createElement("div");
    let dica = document.querySelector(".dicas");

    texto.setAttribute("class","texto");
    texto.innerHTML = dicasObject[Math.floor(Math.random()*dicasObject.length)].dica
    dica.appendChild(texto)
}