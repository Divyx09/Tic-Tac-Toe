const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let selectedButton = 0;
let activePlayer = 0;
let currentRound = 1;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
const configOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const inputName = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const player1ConfigButton = document.getElementById("edit-player1-btn");
const player2ConfigButton = document.getElementById("edit-player2-btn");
const cancelOverlayButton = document.getElementById("close-config-button");
const startGameButtonElement = document.getElementById("start-button");
const gameFeildElements = document.querySelectorAll("#game-board li");

player1ConfigButton.addEventListener("click", openPlayerConfig);
player2ConfigButton.addEventListener("click", openPlayerConfig);
cancelOverlayButton.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
inputName.addEventListener("submit", savePlayerConfig);
startGameButtonElement.addEventListener("click", startNewGame);

for (const gameFeildElement of gameFeildElements) {
  gameFeildElement.addEventListener("click", selectGameFeild);
}
