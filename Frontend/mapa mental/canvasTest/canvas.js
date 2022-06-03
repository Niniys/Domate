var op1 = document.querySelector("#opcao1").addEventListener("click", () =>{createMapa()})
var div = document.querySelector("#drop")
var svgNs = "http://www.w3.org/2000/svg"
var svg = document.querySelector("#svg")

function createMapa(){

    let info = {
        "x": "450",
        "y": "345",
        "width": "250px",
        "height": "40px",
        "fill": "#1E90FF"
    }

    createCard(info, "myR");

    let info1 = {
        "x": "50",
        "y": "50",
        "width": "100px",
        "height": "35px",
        "fill": "#95c160"
    }
    createCard(info1, "myRgreen");

    let info2 = {
        "x": "220",
        "y": "90",
        "width": "100px",
        "height": "35px",
        "fill": "#95c160"
    }
    createCard(info2, "myRgreen");

    let info3 = {
        "x": "40",
        "y": "110",
        "width": "100px",
        "height": "35px",
        "fill": "#95c160"
    }
    createCard(info3, "myRgreen");
    
    let info4 = {
        "x": "50",
        "y": "170",
        "width": "100px",
        "height": "35px",
        "fill": "#95c160"
    }
    createCard(info4, "myRgreen");
    
    let info5 = {
        "x": "70",
        "y": "220",
        "width": "100px",
        "height": "35px",
        "fill": "#95c160"
    }
    createCard(info5, "myRgreen");

    let info6 = {
        "x": "90",
        "y": "280",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info6, "myRciano");
    
    let info7 = {
        "x": "70",
        "y": "330",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info7, "myRciano");
    
    let info8 = {
        "x": "80",
        "y": "375",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info8, "myRciano");
    
    let info9 = {
        "x": "90",
        "y": "420",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info9, "myRciano");
    
    let info10 = {
        "x": "100",
        "y": "465",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info10, "myRciano");

    let info11 = {
        "x": "260",
        "y": "350",
        "width": "100px",
        "height": "35px",
        "fill": "#20B2AA"
    }
    createCard(info11, "myRciano");

    let info12 = {
        "x": "320",
        "y": "430",
        "width": "100px",
        "height": "35px",
        "fill": "#FFB6C1"
    }
    createCard(info12, "myRlightpink");
    
    let info13 = {
        "x": "409",
        "y": "480",
        "width": "100px",
        "height": "35px",
        "fill": "#FFB6C1"
    }
    createCard(info13, "myRlightpink");
    
    let info14 = {
        "x": "350",
        "y": "540",
        "width": "100px",
        "height": "35px",
        "fill": "#FFB6C1"
    }
    createCard(info14, "myRlightpink");
    
    let info15 = {
        "x": "270",
        "y": "585",
        "width": "100px",
        "height": "35px",
        "fill": "#FFB6C1"
    }
    createCard(info15, "myRlightpink");

    let info16 = {
        "x": "320",
        "y": "200",
        "width": "100px",
        "height": "35px",
        "fill": "#FFA500"
    }
    createCard(info16, "myRorange");
    
    let info17 = {
        "x": "3",
        "y": "200",
        "width": "100px",
        "height": "35px",
        "fill": "#FFA500"
    }
    createCard(info17, "myRorange");
}

function createCard(info, id){

    let {x, y, width, height, fill} = info;
    let card = document.createElementNS(svgNs, "rect");
    card.setAttributeNS(null, "id", id);
    card.setAttributeNS(null, "x", x);
    card.setAttributeNS(null, "y", y);

    card.style.width = width;
    card.style.height = height;
    card.style.fill = fill;

    svg.appendChild(card);
}

createMapa();

