var circulo =  document.querySelector(".circulo")

var c = document.querySelector("canvas")
var ctx = c.getContext("2d");

var circulo = {
    radius: 20,
    vx: 0,
    vy: 0,
    x: 50,
    y: 50,
    color: "#00f",
    held: false
}

function loop(){
    window.requestAnimationFrame(loop, c)
    update(), 
    render()
}

function update() {

}
function render() {
    ctx.clearReact(0,0, c.width, c.height);
    ctx.fillStyle = circulo.color;
    ctx.beginPath();
    ctx.arc(circulo.x, circulo.y, circulo.radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}