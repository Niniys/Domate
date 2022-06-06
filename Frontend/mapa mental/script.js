var option = document.querySelector(".option");
var drop = document.querySelector(".drop");
drop.addEventListener("mousemove", getPos);
drop.addEventListener("click", setPos);
drop.addEventListener("mouseup", setMove);

var defaultpos = option.clientHeight + 7;

var move = false;

console.log(drop.clientHeight);
console.log(document.body.clientHeight);

function criarCirculo() {
    var circulo = document.createElement("div");
        circulo.style.width = "50px";
        circulo.style.height = "50px";
        circulo.style.background = "white"
        circulo.style.borderRadius = "50%"
        circulo.style.position = "absolute";
        circulo.style.top = "10px";
    
        circulo.addEventListener("mousedown", setMove);
    
        drop.appendChild(circulo)
}

function setPos (e) {
}

function getPos (e) {
    if(move) {
        var top = e.clientY - defaultpos;
        circulo.style.top = top+"px";
        circulo.style.left = e.clientX+"px";
        console.log(e.clientX, e.clientY)
    }
}

function setMove(e) {
    move = !move;
}