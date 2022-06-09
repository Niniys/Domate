var op1 = document.querySelector("#mapa").addEventListener("click", () => {
  createMapa();
});

var svgNs = "http://www.w3.org/2000/svg";
var svg = document.querySelector("#svg");

function createMapa() {
  let card = {
    x: "450",
    y: "345",
    width: "250px",
    height: "40px",
    fill: "#1E90FF",
  };

  createCard(card, "myR");

  let card1 = {
    x: "50",
    y: "50",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card1, "myRgreen");

  let card2 = {
    x: "220",
    y: "90",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card2, "myRgreen");

  let card3 = {
    x: "40",
    y: "110",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card3, "myRgreen");

  let card4 = {
    x: "50",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card4, "myRgreen");

  let card5 = {
    x: "70",
    y: "220",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card5, "myRgreen");

  let card6 = {
    x: "90",
    y: "280",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card6, "myRciano");

  let card7 = {
    x: "70",
    y: "330",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card7, "myRciano");

  let card8 = {
    x: "80",
    y: "375",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card8, "myRciano");

  let card9 = {
    x: "90",
    y: "420",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card9, "myRciano");

  let card10 = {
    x: "100",
    y: "465",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card10, "myRciano");

  let card11 = {
    x: "260",
    y: "350",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };
  createCard(card11, "myRciano");

  let card12 = {
    x: "320",
    y: "430",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };
  createCard(card12, "myRlightpink");

  let card13 = {
    x: "409",
    y: "480",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };
  createCard(card13, "myRlightpink");

  let card14 = {
    x: "350",
    y: "540",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };
  createCard(card14, "myRlightpink");

  let card15 = {
    x: "270",
    y: "585",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };
  createCard(card15, "myRlightpink");

  let card16 = {
    x: "320",
    y: "200",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };
  createCard(card16, "myRorange");

  let card17 = {
    x: "400",
    y: "120",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };
  createCard(card17, "myRorange");

  let card18 = {
    x: "500",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };
  createCard(card18, "myRorange");
  
  let card19 = {
    x: "500",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };
  createCard(card19, "myRorange");

  let card20 = {
    x: "500",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };
  createCard(card20, "myRorange");

  let linha


}

function createCard(info, id) {
  let { x, y, width, height, fill } = info;
  let card = document.createElementNS(svgNs, "rect");
  card.setAttributeNS(null, "id", id);
  card.setAttributeNS(null, "x", x);
  card.setAttributeNS(null, "y", y);

  card.style.width = width;
  card.style.height = height;
  card.style.fill = fill;

  svg.appendChild(card);
}

function createLinha(info, id) {
  let {xf, yf, width, stroke}  = info;
  let point = document.createElementNS(svgNs, "line");
  point.setAttributeNS(null,"id", id);
  point.setAttributeNS(null,"x1", xn);
  point.setAttributeNS(null,"y1", yn);
  point.setAttributeNS(null,"x2", xf);
  point.setAttributeNS(null,"y2", yf);

  point.style.width = width;
  point.style.stroke = stroke;

  svg.appendChild(point);
}

createMapa();

