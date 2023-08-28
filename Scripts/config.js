function openPlayerConfig(event) {
  selectedButton = +event.target.dataset.playerid;
  configOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
  //   console.log(selectedButton)
}
function closePlayerConfig() {
  configOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  inputName.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  inputName.firstElementChild.lastElementChild.value = "";
}
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  enteredText = formData.get("playername").trim();
  // console.log(enteredText)

  if (!enteredText) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please Enter a Valid Name!";
    return;
  }

  const updatePlayerDataElement = document.getElementById(
    "player-" + selectedButton + "-data"
  );
  //   console.log(updatePlayerDataElement);
  updatePlayerDataElement.children[1].textContent = enteredText;

  players[selectedButton- 1].name = enteredText;

  closePlayerConfig();
}
