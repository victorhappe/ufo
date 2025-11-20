const alien = document.querySelector("#HotspotAlien");
const mand = document.querySelector("#HotspotMand");
const nabo = document.querySelector("#HotspotNabo");

/************** HotspotAlien **************/

alien.addEventListener("mouseover", mouseOverHead);

function mouseOverHead() {
  console.log("mouseOverAlien");
  alien.style.fill = "white";
}
alien.addEventListener("mouseout", mouseOutHead);

function mouseOutHead() {
  console.log("mouseOutHead");
  alien.style.fill = "red";
}
alien.addEventListener("click", clickAlien);
function clickAlien() {
  console.log("clickAlien");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Du har lige beemet et menneske op, hvad gør du?";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = `<h3> 1. Sikre prøven. Sørg for at mennesket kan trække vejret og ikke går i panik. (mennesker er skrøbelige og går hurtigt i stykker)</h3>`;
  document.querySelector("#requirement").innerHTML = `<h3>2. Berolig det. Giv det en stol, måske en snack eller noget vand. Mennesker bliver hurtigt utrykke og sultne.</h3>`;
  document.querySelector("#reaction").innerHTML = `<h3>2. Beslut skæbnen. 
  Skal mennesket, returneres sikker, blive jeres ambassadør - (Lær det universets hemmeligheder) - eller bare have en mindwipe - ingen skade sket</h3>`;
}

/************** HotspotMand **************/

mand.addEventListener("mouseover", mouseOverMand);

function mouseOverMand() {
  console.log("mouseOverMand");
  mand.style.fill = "white";
}

mand.addEventListener("mouseout", mouseOutMand);

function mouseOutMand() {
  console.log("mouseOutMand");
  mand.style.fill = "red";
}

mand.addEventListener("click", clickMand);

function clickMand() {
  console.log("clickMand");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Du er lige blevet bortført af et rumvæsen, hvad gør du?";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = `<h3>1. Forhold dig roligt. Panik hjælper aldrig, heller ikke hvis du står foran intergalaktiske væsner. Hvis de har teknologi til at hente dig ombord, har de højst sandsynligt også styr på situationen.</h3>`;
  document.querySelector("#requirement").innerHTML = `<h3>2. Vis ikke aggresiion. Undgå hurtige bevægelser eller truende adfærd. De kan måske tolke dig som farlig og det er næppe smart.</h3>`;
  document.querySelector("#reaction").innerHTML = `<h3>3. Observer. Prøv at lægge mærke til deres kropssprog, lyde, teknologi, og intentioner. Ser de truende ud eller virker de nysgerrige?</h3>`;
}

/************** HotspotNabo **************/

nabo.addEventListener("mouseover", mouseOverNabo);

function mouseOverNabo() {
  console.log("mouseOverNabo");
  nabo.style.fill = "white";
}

nabo.addEventListener("mouseout", mouseOutNabo);

function mouseOutNabo() {
  console.log("mouseOutNabo");
  nabo.style.fill = "red";
}

nabo.addEventListener("click", clickNabo);

function clickNabo() {
  console.log("clickNabo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Du ser din nabo blive beemet op i en UFO – hvad gør du?";
  document.querySelector(".placeholder").textContent = "";
  document.querySelector("#efficiency").innerHTML = `<h3>1. Dokumentér det! Find din telefon og film beviset.</h3>`;
  document.querySelector("#requirement").innerHTML = `<h3>2. Overvej om du skal ringe til nogen… eller bare løbe!</h3>`;
  document.querySelector("#reaction").innerHTML = `<h3>3. Bevar roen</h3>`;
}

/************Animation***********/

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#reaction").classList.remove("hide");
  document.querySelector("#reaction").classList.add("fadeIn");

  document.querySelector("#efficiency").addEventListener("animationend", cleanup);
  document.querySelector("#requirement").addEventListener("animationend", cleanup);
  document.querySelector("#reaction").addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#reaction").removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
  document.querySelector("#reaction").classList.remove("fadeIn");
}
