/*-------------------------------- Variables --------------------------------*/
let onePlayer = ''
let twoPlayers = ''
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
const purpleBet = document.querySelector(".purple");
const boardChoices = document.querySelectorAll(".first");
const betButton = document.querySelector(".betbBtn");
const replayButton = document.querySelector(".replayBtn");
const scoreDisplay = document.querySelector(".scoreDisplay");
const scoreText = document.createElement("span");
const onePlayerBtn = document.querySelector(".onePlayer")
const teoPlayersBtn = document.querySelector(".twoPlayers")
/*------------------------ Event Listeners ------------------------*/
// Caching bet options
blueBet.addEventListener("click", () => selectBetColor("🟦", blueBet));
redBet.addEventListener("click", () => selectBetColor("🟥", redBet));
purpleBet.addEventListener("click", () => selectBetColor("🟪", purpleBet));

// Caching All Board Pieces
boardChoices.forEach((choice, index) => {
  choice.addEventListener("click", () => selectBoardColor(index, choice));
});

// Cached Buttons
betButton.addEventListener("click", placeBet);
replayButton.addEventListener("click", resetGame);

/*-------------------------------- Setup Hidden Colors --------------------------------*/

function setUpHiddenColors() {
  hiddenColors = [];

  // Math.floor randomly determine the index for the single 🟪 applies it once
  const purpleIndex = Math.floor(Math.random() * boardChoices.length);

  boardChoices.forEach((_, index) => {
    if (index === purpleIndex) {
      hiddenColors.push("🟪");
    } else {
      const color = Math.random() > 0.5 ? "🟥" : "🟦";
      hiddenColors.push(color);
    }
  });
}
// Math.random randomizing all other pieces on board
/*-------------------------------- Functions --------------------------------*/

function selectBetColor(color, element) {
  selectedBetColor = color;
  blueBet.style.border = "";
  redBet.style.border = "";
  purpleBet.style.border = "";
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
    // If correct, award points based on color
    score += chosenColor === "🟪" ? 5 : 1;
  } else {
    // If incorrect, deduct points based on color
    score -= selectedBetColor === "🟪" ? 5 : 1;
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
    scoreDisplay.textContent = `Score: ${score} — You Won! You Are A Lucky One!`;
  } else {
    scoreDisplay.textContent = `Score: ${score} — You Lost, Better Luck Next Time!`;
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
