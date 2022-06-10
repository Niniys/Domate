var header = document.querySelector("#top");

function menuNav(){
    var nav = document.createElement("div");
    nav.id = "menu";
    var lebel = document.createElement("div");
    var lebel1 = document.createElement("div");
    var lebel2 = document.createElement("div");
    lebel.id = "lebel";
    lebel1.id = "lebel1";
    lebel2.id = "lebel2";
    
    header.appendChild(nav);
    nav.appendChild(lebel);
    nav.appendChild(lebel1);
    nav.appendChild(lebel2);
}

menuNav();
