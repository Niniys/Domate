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
        menu.style.right = "-200%";
        body.style.overflow = "auto";
    }
}

var animate = 1;

function mover() {
    let um = document.querySelector(".um");
    let dois = document.querySelector(".dois");
    let mapa1 = document.querySelector(".mapa1");
    let mapa2 = document.querySelector(".mapa2");
    let mapa3 = document.querySelector(".mapa3");
    let seta = document.getElementById("seta");
    let a = document.getElementById("a");

    if(animate == 1) {
        um.style.animation = "abrir 3s";
        a.style.animation = "texto 3s";
        seta.style.animation = "setar 3s";
      
        um.style.height = "350px";
        um.style.width = "98%";
        um.style.marginTop = "20px";
        um.style.marginLeft = "20px";

        a.style.marginTop = "-250px";

        seta.style.marginLeft = "20px"
        seta.style.marginTop = "-240px";
        seta.style.marginRight = "200%";
        seta.style.transform = "rotate(90deg)";

        

        setTimeout(() => {
            mapa1.style.display = "flex";
            dois.style.display = "none";
            animate ++;
        }, 3000)
    } else {
        um.style.animation = "fechar 3s";
        a.style.animation = "texto2 3s";
        seta.style.animation = "desetar 3s";
                
        um.style.height = "100px";
        um.style.width = "280px";
        um.style.marginTop = "130px";
        um.style.marginLeft = "15%";
        
        a.style.marginTop = "0px";
                
        seta.style.marginLeft = "20px";
        seta.style.marginTop = "0px";
        seta.style.marginRight = "10px";
        seta.style.transform = "rotate(0deg)";
        
        mapa1.style.display = "none";
        mapa2.style.display = "none";
        mapa3.style.display = "none";
        dois.style.display = "flex";
        setTimeout(() => {
            img.style.display = "flex";
            img2.style.display = "none";
             img3.style.display = "none";
            animate --;
        }, 3000)
    }
}

var atual = 1;

function proximo() {
let mapa1 = document.querySelector(".mapa1");
let mapa2 = document.querySelector(".mapa2");
let mapa3 = document.querySelector(".mapa3");
let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

    
    if(atual <= 3) atual ++;
    mapa1.classList.toggle("mapa1--hide");

    if(atual == 1) {
        mapa1.style.display = "flex";
        mapa2.style.display = "none";
        mapa3.style.display = "none";
    } else if(atual == 2) {
        img.style.display = "none";
        img2.style.display = "flex";

        mapa1.style.display = "none";
        mapa2.style.display = "flex";
        mapa3.style.display = "none";
    } else if(atual == 3) {
        img.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "flex";

        mapa1.style.display = "none";
        mapa2.style.display = "none";
        mapa3.style.display = "flex";
    }
}

function voltar() {
    let mapa1 = document.querySelector(".mapa1");
    let mapa2 = document.querySelector(".mapa2");
    let mapa3 = document.querySelector(".mapa3");
    let img = document.getElementById("img");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

    if(atual >= 2) atual --;

    if(atual == 1) {
        img.style.display = "flex";
        img2.style.display = "none";
        img3.style.display = "none";

        mapa1.style.display = "flex";
        mapa2.style.display = "none";
        mapa3.style.display = "none";
    } else if(atual == 2) {
        img.style.display = "none";
        img2.style.display = "flex";
        img3.style.display = "none";
        
        mapa1.style.display = "none";
        mapa2.style.display = "flex";
        mapa3.style.display = "none";
    } else if(atual == 3) {
        img.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "flex";

        mapa1.style.display = "none";
        mapa2.style.display = "none";
        mapa3.style.display = "flex";
    }
}