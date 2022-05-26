var body = document.querySelector(".body");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var footer = document.querySelector(".footer");
var menu = document.querySelector(".menu");
const logado = document.querySelector(".logado");
const deslogado = document.querySelector(".deslogado");
var temas = document.querySelector(".temas");
var sair = document.getElementById("sair");

//login
var nome_usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");
var entrar = document.getElementById("entrar");

//cadastrar
var user = document.getElementById("user");
var cadsenha = document.getElementById("cadsenha");
var cadsenha2 = document.getElementById("cadsenha2");

var temas = ["Padrao", "Lilas", "Inverno", "RosaChoque", "Bege", "Roxo", "Limonada", "CeuLimpo"];
var indexTema = -1;

function loadtema() {
    var temaSelecionado = parseInt(localStorage.getItem("temaselecionado"));
    var userdata = JSON.parse(localStorage.getItem("userdata"));
    localStorage.setItem(temas[temaSelecionado], "enabled");
    document.body.classList.add(temas[temaSelecionado]);
    if (userdata != null) {
        deslogado.style.display = "none";
        logado.style.display = "flex";
        sair.style.display = "flex";
    } else {
        deslogado.style.display = "flex";
        logado.style.display = "none";
        sair.style.display = "none";
    }

    sair.addEventListener("click", () => {
        window.location.reload();
        localStorage.removeItem("userdata");
    })
}

function setTema() {
    var temaSelecionado = localStorage.getItem("temaselecionado");
    if (temaSelecionado !== null) {
        indexTema = Integer.parseInt(temaSelecionado);
    }
}

function showmenu() {
    let menu = document.querySelector(".menu");
    let cover = document.querySelector(".cover");
    let fechar = document.querySelector(".fechar");


    body.style.overflow = "hidden";

    // cover.style.display = "block";
    // body.createElement(cover);
    menu.classList.toggle("menu--open");
    // setTimeout(() => {
    //     cover.style.display = "block";
    // }, 1000);


    // if(cover.classList.toggle("cover--close") == true) {
    //     setTimeout(() => {
    //         // cover.style.display = "none";
    //         // remove("cover--close");
    //         cover.classList.toggle("cover--close")
    //         cover.classList.toggle("cover--open");
    //         cover.style.display = "block";
    //     }, 500);
    // } else if(cover.classList.toggle("cover--close") == false) {
    cover.classList.toggle("cover--open");
    // setTimeout(() => {
    // cover.style.display = "none";
    // remove("cover--close");

    cover.style.display = "block";
    // }, 500);
    // }


    // if(cover.style.display = "none") {
    //     cover.classList.toggle("cover--open");
    //     setTimeout(() => {
    //         // cover.style.display = "none";
    //         cover.style.display = "block";
    //         }, 500);

    // } else {
    //     cover.classList.toggle("cover--close");
    //     setTimeout(() => {
    //     cover.style.display = "none";
    //     }, 500);
    // }
    // fechar.addEventListener("click", () => {
    //     cover.style.display = "none";
    // })
    // cover.classList.toggle("cover--close");

    // setTimeout(() => {
    //     cover.style.display = "none";
    // }, 1000);

}

function hidemenu() {
    let menu = document.querySelector(".menu");
    const cover = document.querySelector(".cover");
    let body = document.querySelector(".body")


    body.style.overflow = "auto";
    // cover.classList.toggle("cover--open");
    // cover.remove();
    // cover.classList.toggle("cover--none");
    // body.classList.remove("cover");
    menu.classList.toggle("menu--open");

    // if(cover.classList.toggle("cover--open") == true) {

    cover.classList.toggle("cover--close");

    setTimeout(function () {
        cover.remove("cover--open");
        // cover.classList.toggle("cover--open");

        // cover.style.display = "block";
        cover.style.display = "none";
    }, 500);
    // } else if(cover.classList.toggle("cover--open") == false && cover.style.display == "block") {
    //     cover.classList.toggle("cover--close");    
    // setTimeout(() => {
    //         // remove("cover--open");

    //                 // cover.style.display = "block";
    //         cover.style.display = "none";
    //     }, 1000);
    // }



    // if(cover.style.display = "block") {
    //     cover.classList.toggle("cover--close");
    //     setTimeout(() => {
    //         // cover.style.display = "block";
    //         cover.style.display = "none";
    //     }, 500);

    // } else {
    //     setTimeout(() => {
    //     cover.style.display = "block";
    //     }, 500);
    // }


}


function themes() {
    let temas = document.querySelector(".temas");

    temas.style.display = "block";

    header.addEventListener("click", () => {
        temas.style.display = "none";
    })

    main.addEventListener("click", () => {
        temas.style.display = "none";
    })

    footer.addEventListener("click", () => {
        temas.style.display = "none";
    })

    // menu.addEventListener("click", () => {
    //     temas.style.display = "none";
    // })



    // logado.addEventListener("click", () => {
    //     temas.style.display = "none";
    // })

    deslogado.addEventListener("click", () => {
        temas.style.display = "none";
    })
}

// Padrão: https://colorhunt.co/palette/511845900c3fc70039ff5733
// Lilás: https://colorhunt.co/palette/8946a6b762c1ea99d5ffcddd
// Inverno: https://colorhunt.co/palette/1c0c5b3d2c8d916bbfc996cc
// Rosa Choque: https://colorhunt.co/palette/4205167d1935b42b51e63e6d
// Bege: https://colorhunt.co/palette/f8ecd1deb6abac7d8885586f
// Tons de Roxo: https://colorhunt.co/palette/9a068079018c4c0070160040
// Limonada: https://colorhunt.co/palette/ffef82efd345babd4282954b
// Céu Limpo: https://colorhunt.co/palette/e8f9fd79dae80aa1dd2155cd




const enablePadrao = () => {
    document.body.classList.add("Padrao");
    localStorage.setItem("Padrao", "enabled");
};

const disablePadrao = () => {
    document.body.classList.remove("Padrao");
    localStorage.setItem("Padrao", null);
};


const enableLilas = () => {
    document.body.classList.add("Lilas");
    localStorage.setItem("Lilas", "enabled");
}

const disableLilas = () => {
    document.body.classList.remove("Lilas");
    localStorage.setItem("Lilas", null);
}


const enableInverno = () => {
    document.body.classList.add("Inverno");
    localStorage.setItem("Inverno", "enabled");
}

const disableInverno = () => {
    document.body.classList.remove("Inverno");
    localStorage.setItem("Inverno", null);
}


const enableRosaChoque = () => {
    document.body.classList.add("RosaChoque");
    localStorage.setItem("RosaChoque", "enabled");
}

const disableRosaChoque = () => {
    document.body.classList.remove("RosaChoque");
    localStorage.setItem("RosaChoque", null);
}


const enableBege = () => {
    document.body.classList.add("Bege");
    localStorage.setItem("Bege", "enabled");
}

const disableBege = () => {
    document.body.classList.remove("Bege");
    localStorage.setItem("Bege", null);
}


const enableRoxo = () => {
    document.body.classList.add("Roxo");
    localStorage.setItem("Roxo", "enabled");
};


const disableRoxo = () => {
    document.body.classList.remove("Roxo");
    localStorage.setItem("Roxo", null);
};


const enableLimonada = () => {
    document.body.classList.add("Limonada");
    localStorage.setItem("Limonada", "enabled");
}

const disableLimonada = () => {
    document.body.classList.remove("Limonada");
    localStorage.setItem("Limonada", null);
}


const enableCeuLimpo = () => {
    document.body.classList.add("CeuLimpo");
    localStorage.setItem("CeuLimpo", "enabled");
}

const disableCeuLimpo = () => {
    document.body.classList.remove("CeuLimpo");
    localStorage.setItem("CeuLimpo", null);
}


var togglePadrao = document.querySelector(".botao1");

togglePadrao.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 0);
    disableCeuLimpo();
    disableLimonada();
    disableBege();
    disableRosaChoque();
    disableInverno();
    disableLilas();
    disableRoxo();
    enablePadrao();
    console.log(temas[0]);
    console.log(0);

    localStorage.setItem("tema", temas[0]);
})

var toggleLilas = document.querySelector(".botao2");

toggleLilas.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 1);
    disableCeuLimpo();
    disableLimonada();
    disableBege();
    disableRosaChoque();
    disableInverno();
    enableLilas();
    console.log(temas[1]);
    console.log(1);

    localStorage.setItem("tema", temas[1]);
})

var toggleInverno = document.querySelector(".botao3");

toggleInverno.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 2);
    disableCeuLimpo();
    disableLimonada();
    disableBege();
    disableRosaChoque();
    enableInverno();
    console.log(temas[2]);
    console.log(2);

    localStorage.setItem("tema", temas[2]);
})

var toggleRosaChoque = document.querySelector(".botao4");

toggleRosaChoque.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 3);
    disableCeuLimpo();
    disableLimonada();
    disableBege();
    enableRosaChoque();
    console.log(temas[3]);
    console.log(3);

    localStorage.setItem("tema", temas[3]);
})

var toggleBege = document.querySelector(".botao5");

toggleBege.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 4);
    disableCeuLimpo();
    disableLimonada();
    enableBege();
    console.log(temas[4]);
    console.log(4);

    localStorage.setItem("tema", temas[4]);
})

var toggleRoxo = document.querySelector(".botao6");

toggleRoxo.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 5);
    disableCeuLimpo();
    disableLimonada();
    disableBege();
    disableRosaChoque();
    disableInverno();
    disableLilas();
    enableRoxo();
    console.log(temas[5]);
    console.log(5);

    localStorage.setItem("tema", temas[5]);
})

var toggleLimonada = document.querySelector(".botao7");

toggleLimonada.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 6);
    disableCeuLimpo();
    enableLimonada();
    console.log(temas[6]);
    console.log(6);

    localStorage.setItem("tema", temas[6]);
})

var toggleCeuLimpo = document.querySelector(".botao8");

toggleCeuLimpo.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 7);
    enableCeuLimpo();
    console.log(temas[7]);
    console.log(7);

    localStorage.setItem("tema", temas[7]);
})

function descer() {
    let cadastro = document.querySelector(".cadastro");
    let login = document.querySelector(".login");
    let botao = document.querySelector(".botao");
    let toggle = document.getElementById("toggle");
    let toggle2 = document.getElementById("toggle2");
    let img = document.getElementById("setas");
    let deslogado = document.querySelector(".deslogado");


    if(toggle.checked != true && toggle2.checked == true) {
        img.src = "../assets/arrow-down-sign-to-navigate.png";
        deslogado.style.height = "600px";
        cadastro.style.marginTop = "400px";
        botao.style.marginTop = "-170px";
    } else if(toggle.checked == true && toggle2.checked == true) {
        img.src = "../assets/right-arrow.png";
        setTimeout(() => {
            botao.style.marginTop = "20px";
            cadastro.style.marginTop = "220px";
        }, 300);
    } else if (toggle.checked == true && toggle2.checked != true){
        img.src = "../assets/right-arrow.png";
        deslogado.style.height = "600px";
        cadastro.style.height = "55%";
        setTimeout(() => {
            botao.style.marginTop = "-60px";
            cadastro.style.marginTop = "220px";
        }, 300);
    } else if(toggle2.checked != true && toggle.checked != true) {
        img.src = "../assets/arrow-down-sign-to-navigate.png";
        deslogado.style.height = "600px";
        botao.style.marginTop = "180px";
        cadastro.style.marginTop = "400px";
        cadastro.style.height = "55%";
    }
}

function descer2() {
    let botao = document.querySelector(".botao");
    let toggle = document.getElementById("toggle");
    let toggle2 = document.getElementById("toggle2");
    let img2 = document.getElementById("setas2");
    let cadastro = document.querySelector(".cadastro");
    let deslogado = document.querySelector(".deslogado");

    if(toggle2.checked != true && toggle.checked == true) {
        img2.src = "../assets/arrow-down-sign-to-navigate.png";
        botao.style.marginTop = "-60px";
        cadastro.style.height = "55%";
        deslogado.style.height = "600px";
    } else if(toggle2.checked == true && toggle.checked == true){
        img2.src = "../assets/right-arrow.png";
        cadastro.style.height = "55%";
        setTimeout(() => {
            botao.style.marginTop = "20px";
        }, 300); 
    } else if(toggle2.checked == true && toggle.checked != true) {
        img2.src = "../assets/right-arrow.png";
        deslogado.style.height = "600px";
        setTimeout(() => {
            botao.style.marginTop = "-170px";
        }, 300); 
    } 
    else if(toggle2.checked != true && toggle.checked != true) {
        deslogado.style.height = "600px";
        img2.src = "../assets/arrow-down-sign-to-navigate.png";
        botao.style.marginTop = "180px";
        cadastro.style.height = "55%";
    }
}

function connection() {
    let data = JSON.stringify({
        nome_usuario: nome_usuario.value,
        senha: senha.value,
    });

    var url = "http://10.87.207.4:3000/login";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        "body": data
    })
        .then(res => { return res.json() })
        .then(data => {
            if (data.length > 0) {
                localStorage.setItem("userdata", JSON.stringify(data));
                window.location.reload();
            } else {
                alert("Usuario ou senha incorretos")
            }
        });
    console.log(data);
}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        entrar.click();
    }
})

function validaCadSenha() {
    if (cadsenha.value === cadsenha2.value) {
        return true;
    }
    return false;
}

function cadastrar() {
    let data = {
        nome_usuario: user.value,
        senha: cadsenha.value,
        senha: cadsenha2.value
    };

    var url = "http://10.87.207.4:3000/usuario";

    if (validaCadSenha() && data != null) {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json()
                .then(dados => {
                    console.log(dados)
                    localStorage.setItem("userdata", JSON.stringify(data));
                    window.location.reload();
                }))
    } else {
        alert("senhas devem ser iguais")
    }

}