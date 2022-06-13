var op1 = document.querySelector("#mapa").addEventListener("click", () => {
  createMapa();
});

var svgNs = "http://www.w3.org/2000/svg";
var svg = document.querySelector("#svg");

function createMapa() {
  let linha = {
    x1: "265",
    y1: "105",
    x2: "310",
    y2: "360",
    width: "4px",
    stroke: "#95c160",
  };

  createLinha(linha, "lgreen");

  let linha1 = {
    x1: "222",
    y1: "105",
    x2: "150",
    y2: "70",
    width: "4px",
    stroke: "#95c160",
  };

  createLinha(linha1, "lgreen1");

  let linha2 = {
    x1: "222",
    y1: "105",
    x2: "140",
    y2: "130",
    width: "4px",
    stroke: "#95c160",
  };

  createLinha(linha2, "lgreen2");

  let linha3 = {
    x1: "222",
    y1: "105",
    x2: "140",
    y2: "200",
    width: "4px",
    stroke: "#95c160",
  };

  createLinha(linha3, "lgreen3");

  let linha4 = {
    x1: "222",
    y1: "105",
    x2: "163",
    y2: "250",
    width: "4px",
    stroke: "#95c160",
  };

  createLinha(linha4, "lgreen4");

  let linha5 = {
    x1: "265",
    y1: "370",
    x2: "165",
    y2: "300",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha5, "lciano5");

  let linha6 = {
    x1: "265",
    y1: "370",
    x2: "165",
    y2: "300",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha6, "lciano6");

  let linha7 = {
    x1: "265",
    y1: "370",
    x2: "165",
    y2: "350",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha7, "lciano7");

  let linha8 = {
    x1: "265",
    y1: "370",
    x2: "165",
    y2: "400",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha8, "lciano8");

  let linha9 = {
    x1: "265",
    y1: "370",
    x2: "180",
    y2: "445",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha9, "lciano9");

  let linha10 = {
    x1: "265",
    y1: "370",
    x2: "185",
    y2: "490",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha10, "lciano10");

  let linha11 = {
    x1: "355",
    y1: "365",
    x2: "450",
    y2: "365",
    width: "4px",
    stroke: "#20B2AA",
  };

  createLinha(linha11, "lciano11");

  let linha12 = {
    x1: "370",
    y1: "460",
    x2: "320",
    y2: "600",
    width: "4px",
    stroke: "#FFB6C1",
  };

  createLinha(linha12, "llightpink12");

  let linha13 = {
    x1: "370",
    y1: "460",
    x2: "400",
    y2: "560",
    width: "4px",
    stroke: "#FFB6C1",
  };

  createLinha(linha13, "llightpink13");

  let linha14 = {
    x1: "370",
    y1: "460",
    x2: "440",
    y2: "490",
    width: "4px",
    stroke: "#FFB6C1",
  };

  createLinha(linha14, "llightpink14");

  let linha15 = {
    x1: "360",
    y1: "435",
    x2: "460",
    y2: "360",
    width: "4px",
    stroke: "#FFB6C1",
  };

  createLinha(linha15, "llightpink15");
  
  let linha16 = {
    x1: "360",
    y1: "225",
    x2: "455",
    y2: "370",
    width: "4px",
    stroke: "#FFA500",
  };

  createLinha(linha16, "lorange16");

  let linha17 = {
    x1: "415",
    y1: "220",
    x2: "450",
    y2: "150",
    width: "4px",
    stroke: "#FFA500",
  };

  createLinha(linha17, "lorange17");

  let linha18 = {
    x1: "415",
    y1: "220",
    x2: "500",
    y2: "190",
    width: "4px",
    stroke: "#FFA500",
  };

  createLinha(linha18, "lorange18");

  let linha19 = {
    x1: "415",
    y1: "220",
    x2: "480",
    y2: "295",
    width: "4px",
    stroke: "#FFA500",
  };

  createLinha(linha19, "lorange19");

  let linha20 = {
    x1: "415",
    y1: "220",
    x2: "490",
    y2: "235",
    width: "4px",
    stroke: "#FFA500",
  };

  createLinha(linha20, "lorange20");

  /*------------------------------------------------------------------------------------------------------------------------------------*/

  let card = {
    x: "450",
    y: "340",
    width: "260px",
    height: "50px",
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

  createCard(card1, "myRgreen1");

  let card2 = {
    x: "220",
    y: "90",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };

  createCard(card2, "myRgreen2");

  let card3 = {
    x: "40",
    y: "110",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };
  createCard(card3, "myRgreen3");

  let card4 = {
    x: "50",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };

  createCard(card4, "myRgreen4");

  let card5 = {
    x: "70",
    y: "220",
    width: "100px",
    height: "35px",
    fill: "#95c160",
  };

  createCard(card5, "myRgreen5");

  let card6 = {
    x: "90",
    y: "280",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card6, "myRciano6");

  let card7 = {
    x: "70",
    y: "330",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card7, "myRciano7");

  let card8 = {
    x: "80",
    y: "375",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card8, "myRciano8");

  let card9 = {
    x: "90",
    y: "420",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card9, "myRciano9");

  let card10 = {
    x: "100",
    y: "465",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card10, "myRciano10");

  let card11 = {
    x: "260",
    y: "350",
    width: "100px",
    height: "35px",
    fill: "#20B2AA",
  };

  createCard(card11, "myRciano11");

  let card12 = {
    x: "320",
    y: "430",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };

  createCard(card12, "myRlightpink12");

  let card13 = {
    x: "409",
    y: "480",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };

  createCard(card13, "myRlightpink13");

  let card14 = {
    x: "350",
    y: "540",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };

  createCard(card14, "myRlightpink14");

  let card15 = {
    x: "270",
    y: "585",
    width: "100px",
    height: "35px",
    fill: "#FFB6C1",
  };

  createCard(card15, "myRlightpink15");

  let card16 = {
    x: "320",
    y: "200",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };

  createCard(card16, "myRorange16");

  let card17 = {
    x: "400",
    y: "120",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };

  createCard(card17, "myRorange17");

  let card18 = {
    x: "500",
    y: "170",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };

  createCard(card18, "myRorange18");

  let card19 = {
    x: "470",
    y: "270",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };

  createCard(card19, "myRorange19");

  let card20 = {
    x: "490",
    y: "220",
    width: "100px",
    height: "35px",
    fill: "#FFA500",
  };

  createCard(card20, "myRorange20");
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
  let { x1, y1, x2, y2, width, stroke } = info;
  let point = document.createElementNS(svgNs, "line");
  point.setAttributeNS(null, "id", id);
  point.setAttributeNS(null, "x1", x1);
  point.setAttributeNS(null, "y1", y1);
  point.setAttributeNS(null, "x2", x2);
  point.setAttributeNS(null, "y2", y2);

  point.style.strokeWidth = width;
  point.style.stroke = stroke;

  svg.appendChild(point);
}

 /*------------------------------------------------------------------------------------------------------------------------------------*/

var temas = ["Padrao", "Lilas", "Inverno", "RosaChoque", "Bege", "Roxo", "Limonada", "CeuLimpo"];
var indexTema = -1;

function loadtema() {
  var temaSelecionado = parseInt(localStorage.getItem("temaselecionado"));
  localStorage.setItem(temas[temaSelecionado], "enabled");
  document.body.classList.add(temas[temaSelecionado]);
}

function setTema() {
  var temaSelecionado = localStorage.getItem("temaselecionado");
  if (temaSelecionado !== null) {
      indexTema = Integer.parseInt(temaSelecionado);
  }
}

// createMapa()