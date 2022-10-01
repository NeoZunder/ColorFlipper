const background = document.body;
const backgroundColor = document.getElementById("getColor");
const btnChangeColor = document.getElementById("btnChangeColor");

function generarLetra() {
  var letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  var numero = (Math.random() * 15).toFixed(0);
  return letras[numero];
}

function colorHEX() {
  var coolor = "";
  for (var i = 0; i < 6; i++) {
    coolor = coolor + generarLetra();
  }
  return "#" + coolor;
}

let hexDecimal;

document.addEventListener("DOMContentLoaded", () => {
  hexDecimal = colorHEX();
  backgroundColor.innerHTML = `Background-Color : ${hexDecimal}`;
  background.style.backgroundColor = `${hexDecimal}`;
});

btnChangeColor.addEventListener("click", () => {
  hexDecimal = colorHEX();
  backgroundColor.innerHTML = `Background-Color : ${hexDecimal}`;
  background.style.backgroundColor = `${hexDecimal}`;
});
