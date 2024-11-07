/*-------------------------------- Variables --------------------------------*/
let selectedBetColor = "";
let selectedBoardColor = "";
let hiddenColors = [];
let betCount = 0;
let score = 0;
let gameOver = null;
let instructionsVisible = false;
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
const instructions = document.querySelector(".instruct");
const goalText = document.querySelector(".goal");
goalText.style.display = "none";

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

// Add instruction button event listener
instructions.addEventListener("click", toggleInstructions);

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
// For Selection of bet Color and board spot
function placeBet() {
  if (selectedBetColor === "" || selectedBoardColor === "") return;
  //prevents bet in same spot
  if (chosenSpots.has(selectedBoardColor)) return;
  // reveals hidden colors
  const chosenColor = hiddenColors[selectedBoardColor];
  const selectedTile = boardChoices[selectedBoardColor];
  selectedTile.textContent = chosenColor;
  chosenSpots.add(selectedBoardColor);
  // processes scores
  if (chosenColor === selectedBetColor) {
    score += chosenColor === "🟪" ? 5 : 1;
  } else {
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
    scoreDisplay.textContent = `Score: ${score}:   You Won! You Are A Lucky One!`;
  } else {
    scoreDisplay.textContent = `Score: ${score}:   You Lost, Better Luck Next Time!`;
  }
}
// clears all choices, reshuffle colors and resets game
function resetGame() {
  score = 0;
  betCount = 0;
  selectedBetColor = "";
  selectedBoardColor = "";
  chosenSpots.clear();
  setUpHiddenColors();
  boardChoices.forEach((choice) => {
    //return board to black and white
    choice.textContent = choice.classList.contains("black") ? "⬛" : "⬜";
  });
  scoreDisplay.textContent = "Score: ";
  scoreDisplay.appendChild(scoreText);
  updateScore();
}

// whether instructions are visible or not
function toggleInstructions() {
  if (instructionsVisible) {
    goalText.style.display = "none";
    instructionsVisible = false;
  } else {
    goalText.style.display = "flex";
    instructionsVisible = true;
  }
}

scoreText.textContent = `Score: ${score}`;
scoreDisplay.appendChild(scoreText);

setUpHiddenColors(); // shuffle colors on board
updateScore(); // insure score is correct as game goes on
