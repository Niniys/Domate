var menu = document.querySelector(".meni");

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
        login.style.height = "40%";
        cadastro.style.marginTop = "480px";
        botao.style.marginTop = "-20px";
        cadastro.style.height = "15%";
    } else if(toggle.checked == true && toggle2.checked == true) {
        img.src = "../assets/right-arrow.png";
        setTimeout(() => {
            deslogado.style.height = "300px";
            botao.style.marginTop = "20px";
            cadastro.style.marginTop = "220px";
        }, 300);
    } else if (toggle.checked == true && toggle2.checked != true){
        img.src = "../assets/right-arrow.png";
        deslogado.style.height = "600px";
        cadastro.style.height = "55%";
        setTimeout(() => {
            botao.style.marginTop = "40px";
            cadastro.style.marginTop = "220px";
        }, 300);
    } 
    else if(toggle.checked != true && toggle2.checked != true) {
        img.src = "../assets/arrow-down-sign-to-navigate.png";
        deslogado.style.height = "600px";
        login.style.height = "40%";
        botao.style.marginTop = "300px";
        cadastro.style.marginTop = "480px";
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
        botao.style.marginTop = "40px";
        cadastro.style.height = "55%";
        deslogado.style.height = "600px";
    } else if(toggle2.checked == true && toggle.checked == true){
        img2.src = "../assets/right-arrow.png";
        
        setTimeout(() => {
            cadastro.style.height = "15%";
            deslogado.style.height = "300px";
            botao.style.marginTop = "20px";
        }, 300); 
    } else if(toggle2.checked == true && toggle.checked != true) {
        img2.src = "../assets/right-arrow.png";
        deslogado.style.height = "600px";
        setTimeout(() => {
            botao.style.marginTop = "-50px";
        }, 300); 
    } 
    else if(toggle2.checked != true && toggle.checked != true) {
        deslogado.style.height = "600px";
        img2.src = "../assets/arrow-down-sign-to-navigate.png";
        botao.style.marginTop = "300px";
        cadastro.style.height = "55%";
    }
}

function meni() {
    let checkbox = document.getElementById("active");

    if(checkbox.checked == true) {
        menu.style.right = "0";
        body.style.overflow = "hidden";
    } else {
        menu.style.right = "-100%";
        body.style.overflow = "auto";
    }
}

function mover() {
    let um = document.querySelector(".um");
    let mapa1 = document.querySelector(".mapa1");

    um.classList.toggle("um--abrir");
    setTimeout(() => {
        mapa1.style.display = "flex";
    }, 810)
    
    
}

var atual = 1;

function proximo() {
let mapa1 = document.querySelector(".mapa1");
let mapa2 = document.querySelector(".mapa2");
let mapa3 = document.querySelector(".mapa3");
let mapa = document.querySelector(".mapa");
let um = document.querySelector(".um");

    
    if(atual <= 3) atual ++;
    mapa1.classList.toggle("mapa1--hide");

    if(atual == 1) {
        mapa1.style.display = "flex";
        mapa2.style.display = "none";
        mapa3.style.display = "none";
    } else if(atual == 2) {
        mapa.classList.toggle("mapa--trocar");
        mapa1.style.display = "none";
        mapa2.style.display = "flex";
        mapa3.style.display = "none";
    } else if(atual == 3) {
        mapa1.style.display = "none";
        mapa2.style.display = "none";
        mapa3.style.display = "flex";
    }
}

function voltar() {
    let mapa1 = document.querySelector(".mapa1");
    let mapa2 = document.querySelector(".mapa2");
    let mapa3 = document.querySelector(".mapa3");

    if(atual >= 2) atual --;

    if(atual == 1) {
        mapa1.style.display = "flex";
        mapa2.style.display = "none";
        mapa3.style.display = "none";
    } else if(atual == 2) {
        mapa1.style.display = "none";
        mapa2.style.display = "flex";
        mapa3.style.display = "none";
    } else if(atual == 3) {
        mapa1.style.display = "none";
        mapa2.style.display = "none";
        mapa3.style.display = "flex";
    }
}