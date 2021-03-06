var body = document.querySelector(".body");
var header = document.querySelector(".header");
var main1 = document.querySelector(".main1");
var main2 = document.querySelector(".main2");
var main3 = document.querySelector(".main3");
var footer = document.querySelector(".footer");
const logado = document.querySelector(".logado");
const deslogado = document.querySelector(".deslogado");
var temas = document.querySelector(".temas");
var sair = document.getElementById("sair");


var temas = ["Padrao", "Lilas", "Inverno", "RosaChoque", "Bege", "TempodeChuva", "Limonada", "CeuLimpo", "Frutose", "Roxo"];
var indexTema = -1;

function loadtema() {
    let config = document.getElementById("config");

    var temaSelecionado = parseInt(localStorage.getItem("temaselecionado"));
    var userdata = JSON.parse(localStorage.getItem("userdata"));
    localStorage.setItem(temas[temaSelecionado], "enabled");
    document.body.classList.add(temas[temaSelecionado]);
    if (userdata != null) {
        deslogado.style.display = "none";
        config.style.display = "flex";
        sair.style.display = "flex";
    } else {
        deslogado.style.display = "flex";
        config.style.display = "none";
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

function themes() {
    let temas = document.querySelector(".temas");
    let ideia = document.getElementById("idea");
    let btn = document.querySelector(".menu-btn");
    let botao = document.querySelector(".botao");

    temas.style.display = "block";

    main1.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    main2.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    main3.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    footer.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    deslogado.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    ideia.addEventListener("mouseover", () => {
        temas.style.display = "none";
    })

    deslogado.addEventListener("click", () => {
        temas.style.display = "none";
    })

    botao.addEventListener("click", () => {
        temas.style.display = "none";
    })

    btn.addEventListener("click", () => {
        temas.style.display = "none";
    })
}

// Padr??o: https://colorhunt.co/palette/511845900c3fc70039ff5733
// Lil??s: https://colorhunt.co/palette/8946a6b762c1ea99d5ffcddd
// Inverno: https://colorhunt.co/palette/1c0c5b3d2c8d916bbfc996cc
// Rosa Choque: https://colorhunt.co/palette/4205167d1935b42b51e63e6d
// Bege: https://colorhunt.co/palette/f8ecd1deb6abac7d8885586f
// Tons de Roxo: https://colorhunt.co/palette/9a068079018c4c0070160040
// Limonada: https://colorhunt.co/palette/ffef82efd345babd4282954b
// C??u Limpo: https://colorhunt.co/palette/e8f9fd79dae80aa1dd2155cd

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


const enableTempodeChuva = () => {
    document.body.classList.add("TempodeChuva");
    localStorage.setItem("TempodeChuva", "enabled");
};


const disableTempodeChuva = () => {
    document.body.classList.remove("TempodeChuva");
    localStorage.setItem("TempodeChuva", null);
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


const enableFrutose = () => {
    document.body.classList.add("Frutose");
    localStorage.setItem("Frutose", "enabled");
}

const disableFrutose = () => {
    document.body.classList.remove("Frutose");
    localStorage.setItem("Frutose", null);
}


const enableRoxo = () => {
    document.body.classList.add("Roxo");
    localStorage.setItem("Roxo", "enabled");
}

const disableRoxo = () => {
    document.body.classList.remove("Roxo");
    localStorage.setItem("Roxo", null);
}


var togglePadrao = document.querySelector(".botao1");

togglePadrao.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 0);
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    disableTempodeChuva();
    disableBege();
    disableRosaChoque();
    disableInverno();
    disableLilas();
    enablePadrao();
    console.log(temas[0]);
    console.log(0);

    localStorage.setItem("tema", temas[0]);
})

var toggleLilas = document.querySelector(".botao2");

toggleLilas.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 1);
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    disableTempodeChuva();
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
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    disableTempodeChuva();
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
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    disableTempodeChuva();
    disableBege();
    enableRosaChoque();
    console.log(temas[3]);
    console.log(3);

    localStorage.setItem("tema", temas[3]);
})

var toggleBege = document.querySelector(".botao5");

toggleBege.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 4);   
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    disableTempodeChuva();
    enableBege();
    console.log(temas[4]);
    console.log(4);

    localStorage.setItem("tema", temas[4]);
})

var toggleTempodeChuva = document.querySelector(".botao6");

toggleTempodeChuva.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 5); 
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    disableLimonada();
    enableTempodeChuva();
    console.log(temas[5]);
    console.log(5);

    localStorage.setItem("tema", temas[5]);
})

var toggleLimonada = document.querySelector(".botao7");

toggleLimonada.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 6);
    disableRoxo();
    disableFrutose();
    disableCeuLimpo();
    enableLimonada();
    console.log(temas[6]);
    console.log(6);

    localStorage.setItem("tema", temas[6]);
})

var toggleCeuLimpo = document.querySelector(".botao8");

toggleCeuLimpo.addEventListener("click", function () {

    localStorage.setItem("temaselecionado", 7); 
    disableRoxo();
    disableFrutose();
    enableCeuLimpo();
    console.log(temas[7]);
    console.log(7);

    localStorage.setItem("tema", temas[7]);
})

var toggleFrutose = document.querySelector(".botao9");

toggleFrutose.addEventListener("click", () => {
    localStorage.setItem("temaselecionado", 8);
    disableRoxo();
    enableFrutose();
    console.log(temas[8]);
    console.log(8);

    localStorage.setItem("tema", temas[8]);
})

var toggleRoxo = document.querySelector(".botao10");

toggleRoxo.addEventListener("click", () => {
    localStorage.setItem("temaselecionado", 9);
    enableRoxo();
    console.log(temas[9]);
    console.log(9);

    localStorage.setItem("tema", temas[9]);
})

// var $btnAumentar = $("#btnAumentar");
// var $btnDiminuir = $("#btnDiminuir");
// var $elemento = $("body #content").find("*"); //encontra todos os elementos dentro do #content
// var fonts = [];

// function obterTamanhoFonte() {
//   for (var i = 0; i < $elemento.length; i++) {
//     fonts.push(parseFloat($elemento.eq(i).css('font-size')));
//   }
// }
// obterTamanhoFonte();
// $btnAumentar.on('click', function() {
//   for (var i = 0; i < $elemento.length; i++) {
//     ++fonts[i];
//     $elemento.eq(i).css('font-size', fonts[i]);
//   }
// });

// $btnDiminuir.on('click', function() {
//   for (var i = 0; i < $elemento.length; i++) {
//     --fonts[i];
//     $elemento.eq(i).css('font-size', fonts[i]);
//   }
// });

function dicas() {
    let dicas = document.querySelector(".dicas");
    let cores1 = document.getElementById("cores") 
    let btn = document.querySelector(".menu-btn");
    let botao = document.querySelector(".botao");

    dicas.style.display = "block";

    main1.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    main2.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    main3.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    footer.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    deslogado.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    deslogado.addEventListener("click", () => {
        dicas.style.display = "none";
    })

    botao.addEventListener("click", () => {
        dicas.style.display = "none";
    })

    cores1.addEventListener("mouseover", () => {
        dicas.style.display = "none";
    })

    btn.addEventListener("click", () => {
        dicas.style.display = "none";
    })
}