// ! First page, form etc
let pcNum;
let playerName;
const formName = document.querySelector(".formName");
const firstPage = document.querySelector("#firstPage");
const mainEl = document.querySelector("main");
const wlPage = document.querySelector("#wlPage");
const wlText = wlPage.querySelector("h1");
const wlScore = wlPage.querySelector("h2");
const resetBtn = wlPage.querySelector("#reset");

formName.addEventListener("submit", (event) => {
  playerName = formName.querySelector("input").value;
  const player1 = document.querySelector("#playerName");
  player1.innerText = playerName;
  firstPage.style.display = "none";
  mainEl.style.display = "block";
  event.preventDefault();
});

// ! ScoreBoard
let playerScore = 0;
let pcScore = 0;
const h2ScorePlayer = document.querySelector("#playerScore");
const h2ScorePc = document.querySelector("#pcScore");
h2ScorePlayer.innerText = playerScore;
h2ScorePc.innerText = pcScore;
// ! Game Page
const formGame = document.querySelector("#formGame");
const winLose = document.querySelector("#winLose");
const roundDiv = document.querySelector("#roundDiv");
let playerPick = roundDiv.querySelector("#playerPick");
let pcPick = roundDiv.querySelector("#pcPick");
const pcArr = ["Rock", "Paper", "Scissors"];

formGame.addEventListener("click", (event) => {
  event.preventDefault();
  pcNum = Math.floor(Math.random() * 3);
  playerPick.innerText = `${playerName} Picked ` + event.target.id;
  pcPick.innerText = "Gaga Picked " + pcArr[pcNum];

  if (
    (event.target.id == "rock" && pcNum === 2) ||
    (event.target.id == "paper" && pcNum === 0) ||
    (event.target.id == "scissors" && pcNum === 1)
  ) {
    playerScore++;
    h2ScorePlayer.innerText = playerScore;
    winLose.innerText = `${playerName} score!`;
  } else if (
    (event.target.id == "rock" && pcNum === 1) ||
    (event.target.id == "paper" && pcNum === 2) ||
    (event.target.id == "scissors" && pcNum === 0)
  ) {
    pcScore++;
    h2ScorePc.innerText = pcScore;
    winLose.innerText = "GAGA score!";
  } else if (
    (event.target.id == "rock" && pcNum === 0) ||
    (event.target.id == "paper" && pcNum === 1) ||
    (event.target.id == "scissors" && pcNum === 2)
  ) {
    winLose.innerText = "It's a tie!";
  } else if (event.target.id == "formGame") {
    playerPick.innerText = "";
    pcPick.innerText = "";
  }

  //!  Winner/ Loser Page

  if (playerScore === 3 || pcScore === 3) {
    mainEl.style.display = "none";
    wlPage.style.display = "flex";

    if (playerScore === 3) {
      wlText.innerText = `${playerName} Won!`;
      wlScore.innerText = `Final score ${playerScore} - ${pcScore}`;
    } else if (pcScore === 3) {
      wlText.innerText = "GAGA Won!";
      wlScore.innerText = `Final score ${playerScore} - ${pcScore}`;
    }

    resetBtn.addEventListener("click", (event) => {
      location.reload();
      event.preventDefault();
    });
  }
});

// ! Tutorial Page
const tutorialBtn = document.querySelector("#tutorialBtn");
const tutorialPage = document.querySelector("#tutorialPage");
const tutorialHide = document.querySelector("#tutorialHide");
tutorialBtn.addEventListener("click", (event) => {
  tutorialPage.style.display = "flex";
  tutorialBtn.style.display = "none";
});
tutorialHide.addEventListener("click", (event) => {
  tutorialPage.style.display = "none";
  tutorialBtn.style.display = "inline-block";
});
