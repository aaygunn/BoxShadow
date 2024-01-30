//Seçim

const borderRadiusRange = document.getElementById("border-radius-range");
const borderRadiusInput = document.getElementById("radius-input");
const kare = document.getElementById("kare");
const heightRange = document.getElementById("height-range");
const heightInput = document.getElementById("height-input");
const widthRange = document.getElementById("width-range");
const widthInput = document.getElementById("width-input");
const yatayShadowRange = document.getElementById("yatay-shadow-range");
const yatayShadowInput = document.getElementById("yatay-shadow-input");
const dikeyShadowRange = document.getElementById("dikey-shadow-range");
const dikeyShadowInput = document.getElementById("dikey-shadow-input");
const bulaniklikRange = document.getElementById("bulaniklik-range");
const bulaniklikInput = document.getElementById("bulaniklik-input");
const yayilmaRange = document.getElementById("yayilma-range");
const yayilmaInput = document.getElementById("yayilma-input");
const button = document.getElementById("btn");
const textInput = document.getElementById("code-txt");
const color = document.getElementById("color-palette");
const colorInput = document.getElementById("color-input");

color.addEventListener("input", renkYaz);
function renkYaz() {
  const colorVal = color.value;
  colorInput.value = colorVal;
  kutuyaUygula();
}
renkYaz();

button.addEventListener("click", pencere);
function pencere() {
  textInput.style.display = "block";
}

//Border Radius
function changeVal() {
  const radiusVal = borderRadiusRange.value;
  borderRadiusInput.value = radiusVal;
  kare.style.borderRadius = radiusVal + "rem";
}
//Height

heightRange.addEventListener("input", yukseklikAl);
function yukseklikAl() {
  const yukseklik = heightRange.value;
  heightInput.value = yukseklik;
  kare.style.height = yukseklik + "rem";
}

//Width
widthRange.addEventListener("input", genislikAl);
function genislikAl() {
  const genislik = widthRange.value;
  widthInput.value = genislik;
  kare.style.width = genislik + "rem";
}
//Shadow
yatayShadowRange.addEventListener("input", yatayShadow);
function yatayShadow() {
  const yShadow = yatayShadowRange.value;
  yatayShadowInput.value = yShadow;
  kutuyaUygula();
}

dikeyShadowRange.addEventListener("input", dikeyShadow);
function dikeyShadow() {
  const dShadow = dikeyShadowRange.value;
  dikeyShadowInput.value = dShadow;
  kutuyaUygula();
}

bulaniklikRange.addEventListener("input", bulaniklikAl);
function bulaniklikAl() {
  const bulaniklik = bulaniklikRange.value;
  bulaniklikInput.value = bulaniklik;
  kutuyaUygula();
}

yayilmaRange.addEventListener("input", yayilma);
function yayilma() {
  const yayil = yayilmaRange.value;
  yayilmaInput.value = yayil;
  kutuyaUygula();
}

function kutuyaUygula() {
  const ysha = yatayShadowInput.value;
  const dsha = dikeyShadowInput.value;
  const bul = bulaniklikInput.value;
  const yay = yayilmaInput.value;
  const code = textInput.value;
  const renk = colorInput.value;
  const birlestir = `${ysha}px ${dsha}px ${bul}px ${yay}px ${renk} `;

  //   console.log(birlestir);
  kare.style.boxShadow = birlestir;

  textInput.value = "box-shadow:" + birlestir + ";";
  console.log(textInput);
}
