/************** HotspotAlien **************/

document
  .querySelector("#HotspotAlien")
  .addEventListener("mouseover", mouseOverHead);

function mouseOverHead() {
  console.log("mouseOverAlien");
  document.querySelector("#HotspotAlien").style.fill = "white";
}
document
  .querySelector("#HotspotAlien")
  .addEventListener("mouseout", mouseOutHead);

function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#HotspotAlien").style.fill = "red";
}
document.querySelector("#HotspotAlien").addEventListener("click", clickAlien);
function clickAlien() {
  console.log("clickAlien");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Alien";
  document.querySelector(".placeholder").textContent =
    "Du har lige bortført et menneske, hvad gør du?";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3> 1. Sikre prøven. Sørg for at mennesket kan trække vejret og ikke går i panik. (mennesker er skrøbelige og går hurtigt i stykker)</h3>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>2. Berolig det. Giv det en stol, måske en snack eller noget vand. Mennesker bliver hurtigt utrykke og sultne.</h3>`;
  document.querySelector(
    "#reaction"
  ).innerHTML = `<h3>2. Beslut skæbnen. Skal mennesket. A: Returneres sikker. B: Blive jeres ambassadør. Lær det universets hemmeligheder. C: Bare have en mindwipe - ingen skade sket</h3>`;
}

/************** HotspotMand **************/

document
  .querySelector("#HotspotMand")
  .addEventListener("mouseover", mouseOverMand);

function mouseOverMand() {
  console.log("mouseOverMand");
  document.querySelector("#HotspotMand").style.fill = "white";
}

document
  .querySelector("#HotspotMand")
  .addEventListener("mouseout", mouseOutMand);

function mouseOutMand() {
  console.log("mouseOutMand");
  document.querySelector("#HotspotMand").style.fill = "red";
}

document.querySelector("#HotspotMand").addEventListener("click", clickMand);

function clickMand() {
  console.log("clickMand");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Mand";
  document.querySelector(".placeholder").textContent =
    "Du står nu på jorden og kigger op — hvad ser du?";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3>1. Forsøg at filme det hele. Ingen tror på dig alligevel, men du skal prøve.</h3>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>2. Råb på hjælp. Måske ser naboen noget!</h3>`;
  document.querySelector("#reaction").innerHTML = `<h3>2. Beslut skæbnen</h3>`;
}

/************** HotspotNabo **************/

document
  .querySelector("#HotspotNabo")
  .addEventListener("mouseover", mouseOverNabo);

function mouseOverNabo() {
  console.log("mouseOverNabo");
  document.querySelector("#HotspotNabo").style.fill = "white";
}

document
  .querySelector("#HotspotNabo")
  .addEventListener("mouseout", mouseOutNabo);

function mouseOutNabo() {
  console.log("mouseOutNabo");
  document.querySelector("#HotspotNabo").style.fill = "red";
}

document.querySelector("#HotspotNabo").addEventListener("click", clickNabo);

function clickNabo() {
  console.log("clickNabo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Nabo";
  document.querySelector(".placeholder").textContent =
    "Du ser din nabo blive beemet op i en UFO – hvad gør du?";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3>1. Dokumentér det! Find din telefon og film beviset.</h3>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>2. Overvej om du skal ringe til nogen… eller bare løbe!</h3>`;
}

/************Animation***********/

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#reaction").classList.remove("hide");
  document.querySelector("#reaction").classList.add("fadeIn");

  document
    .querySelector("#efficiency")
    .addEventListener("animationend", cleanup);
  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
  document.querySelector("#reaction").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#reaction")
    .removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
  document.querySelector("#reaction").classList.remove("fadeIn");
}
