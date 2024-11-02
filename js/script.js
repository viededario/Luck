/*-------------------------------- Variables --------------------------------*/
let selectedBetColor = "";
let selectedBoardColor = "";
let hiddenColors = [];
let betCount = 0;
let score = 0;
let gameOver = null;
let chosenSpots = new Set(); // prevent multiple bets at the same spot

/*------------------------ Cached Element References ------------------------*/
const blueBet = document.querySelector(".blue");
const redBet = document.querySelector(".red");
const purpleBet = document.querySelector(".purple")
const boardChoices = document.querySelectorAll(".first");
const betButton = document.querySelector(".betbBtn");
const replayButton = document.querySelector(".replayBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
const scoreText = document.createElement("span");


/*------------------------ Event Listeners ------------------------*/
blueBet.addEventListener("click", () => selectBetColor("🟦", blueBet));
redBet.addEventListener("click", () => selectBetColor("🟥", redBet));
purpleBet.addEventListener("click", () => selectBetColor("🟪", purpleBet));

boardChoices.forEach((choice, index) => {
  choice.addEventListener("click", () => selectBoardColor(index, choice));
});

betButton.addEventListener("click", placeBet);
replayButton.addEventListener("click", resetGame);

/*-------------------------------- Setup Hidden Colors --------------------------------*/

function setUpHiddenColors() {
  hiddenColors = [];
  boardChoices.forEach(() => {
    const color = Math.random() > 0.5 ? "🟥" : "🟦";
    hiddenColors.push(color);
  });
}

// /*-------------------------------- Functions --------------------------------*/



function selectBetColor(color, element) {
  selectedBetColor = color;
  blueBet.style.border = "";
  redBet.style.border = "";
  element.style.border = "5px solid red";
}

function selectBoardColor(index, element) {
  selectedBoardColor = index;
  boardChoices.forEach((choice) => (choice.style.border = ""));
  element.style.border = "5px solid red";
}

function placeBet() {
  if (selectedBetColor === "" || selectedBoardColor === "") return;

  if (chosenSpots.has(selectedBoardColor)) return;

  const chosenColor = hiddenColors[selectedBoardColor];
  const selectedTile = boardChoices[selectedBoardColor];
  selectedTile.textContent = chosenColor;
  chosenSpots.add(selectedBoardColor);

  if (chosenColor === selectedBetColor) {
    score++;
  } else {
    score--;
  }

  updateScore();
  betCount++;

  if (betCount === boardChoices.length) {
    displayEndMessage();
  }
}

function updateScore() {
  scoreText.textContent = `Score: ${score}`;
}

function displayEndMessage() {
  if (score >= 8) {
    scoreDisplay.textContent = "You Won! You Are A Lucky One!";
  } else {
    scoreDisplay.textContent = "You Lost, Better Luck Next Time!";
  }
}

function resetGame() {
  score = 0;
  betCount = 0;
  selectedBetColor = "";
  selectedBoardColor = "";
  chosenSpots.clear();
  setUpHiddenColors();
  boardChoices.forEach((choice) => {
    choice.textContent = choice.classList.contains("black") ? "⬛" : "⬜";
  });
  scoreDisplay.textContent = "Score: ";
  scoreDisplay.appendChild(scoreText);
  updateScore();
}

scoreText.textContent = `Score: ${score}`;
scoreDisplay.appendChild(scoreText);

setUpHiddenColors();
updateScore();
