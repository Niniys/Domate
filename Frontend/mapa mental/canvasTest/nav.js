var body = document.querySelector("#body");
var header = document.querySelector("#top");
var nav = document.createElement("div");
var label = document.createElement("div");
var label1 = document.createElement("div");
var label2 = document.createElement("div");
var menu = document.querySelector("#back");
var logo = document.querySelector("#logo");
var options = document.querySelector("#option");
var options2 = document.querySelector("#option2");
var time = document.createElement("a");
var home = document.createElement("a");
nav.id = "menu";
label.id = "label";
label1.id = "label1";
label2.id = "label2";

header.appendChild(nav);
nav.appendChild(label2);
nav.appendChild(label1);
nav.appendChild(label);
body.appendChild(menu);

let x = 0;

function menuNav() {
  nav.addEventListener("click", () => {
    if (x === 0) {
      label2.classList.add("down");
      label2.classList.remove("downReverse");
      label.classList.add("rideUp");
      label.classList.remove("rideUpReverse");
      label1.classList.add("reduce");
      label1.classList.remove("reduceReverse");
      menu.classList.add("appear");
      menu.classList.remove("toRecall");

      nav.style.zIndex = 2;
      logo.style.zIndex = 2;
      options.style.display = "flex";
      options2.style.display = "flex";
      options.style.width = "256px";
      options.style.height = "60px";
      options2.style.display = "flex";
      options2.style.width = "256px";
      options2.style.height = "60px";
  
      x = 1;
    } else {
      label2.classList.remove("down");
      label2.classList.add("downReverse");
      label.classList.remove("rideUp");
      label.classList.add("rideUpReverse");
      label1.classList.remove("reduce");
      label1.classList.add("reduceReverse");
      menu.classList.remove("appear");
      menu.classList.add("toRecall");

      options.style.display = "none";
      options2.style.display = "none";

      x = 0;
    }
  });
}
menuNav();
