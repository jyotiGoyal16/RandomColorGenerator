import "./styles.css";

let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.querySelector(".button");
button.addEventListener("click", function () {
  let hexColorCode = generateRandomHexColorCode();
  document.body.style.backgroundColor = hexColorCode;
  let colorText = document.querySelector(".color-value");
  colorText.innerHTML = hexColorCode;
});

function generateRandomHexColorCode() {
  let hexColorCode = "#";
  let randomIndex;
  for (let index = 0; index < 6; index++) {
    randomIndex = getRandom();
    hexColorCode += hexArr[randomIndex];
  }
  return hexColorCode;
}

function getRandom() {
  return Math.floor(Math.random() * hexArr.length);
}
