var botao = document.getElementById("add")
var anote = document.getElementById("compromisso")
var logado =  JSON.parse(localStorage.getItem("userdata"));


function verificarLogin() {
    if(logado != null) {
        return true;
    }
    return false;
}


document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        const add = document.getElementById("add");
        add.click();
    }
})
botao.addEventListener("click", () => {
    let data = JSON.stringify({
        anot: anote.value
    })

    if( verificarLogin() ) {
        fetch("http://10.87.207.4:3000/nota", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            "body": data
        })
        .then(response => { return response.json() })
        .then(data => {
            if (data.anot == "") {
                alert("Erro ao adicionar uma anotação")
            } else {

                let dado = data.id;
                let corpo = document.querySelector(".corpo")
                let card = document.createElement("div")
                let comp = document.getElementById("compromisso")
                card.className = "card"
                card.innerHTML = "<label>" + comp.value + "</label>"
                let importante = document.createElement("button")
                importante.className = "importante"
                importante.addEventListener("click", () => {
                    card.setAttribute("style", "z-index: 5;background-color:#black ;border: 3px solid rgb(255, 0, 0);");
                });
                let excluir = document.createElement("button")
                excluir.className = "excluir"
                excluir.addEventListener("click", () => {
                    card.remove();
                    let data = JSON.stringify({
                        anot: anote.value
                    })
                    fetch("http://10.87.207.4:3000/nota/" + dado, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            "body": data
                        })
                        .then(response => { return response.json() })
                        .then(data => {
                            console.log(data)
                        })
                })
                card.appendChild(importante)
                card.appendChild(excluir)
                corpo.appendChild(card)
                comp.value = ""


            }
        })
    } else {
        
                let corpo = document.querySelector(".corpo")
                let card = document.createElement("div")
                let comp = document.getElementById("compromisso")
                card.className = "card"
                card.innerHTML = "<label>" + comp.value + "</label>"
                let importante = document.createElement("button")
                importante.className = "importante"
                importante.addEventListener("click", () => {
                    card.setAttribute("style", "z-index: 5;background-color:#black ;border: 3px solid rgb(255, 0, 0);");
                });

                let excluir = document.createElement("button")
                excluir.className = "excluir"
                excluir.addEventListener("click", () => {
                    card.remove();
                });

                card.appendChild(importante)
                card.appendChild(excluir)
                corpo.appendChild(card)
                comp.value = ""
    }
    

})