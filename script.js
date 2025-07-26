const getComputerChoice = (choice = Math.floor(Math.random() * 3)) =>
  choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
const getHumanChoice = () =>
  prompt("Enter rock, paper or scissors").toLowerCase();
let humanScore = 0,
  computerScore = 0;
const resultContainer = document.querySelector(".resultContainer");
const humanScoreDiv = document.querySelector("#humanScore");
const computerScoreDiv = document.querySelector("#computerScore");
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) return 0;
  const scn1 = humanChoice == "rock" && computerChoice == "scissors";
  const scn2 = humanChoice == "scissors" && computerChoice == "paper";
  const scn3 = humanChoice == "paper" && computerChoice == "rock";
  if (scn1 || scn2 || scn3) return 1;
  return -1;
};
document
  .querySelectorAll(".playerAvatar")
  .forEach((img) =>
    img.setAttribute(
      "src",
      `https://i.pravatar.cc/300?img=${Math.random() * 70 + 1}`
    )
  );
document.querySelectorAll(".choiceBtn").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    if (result == 1) {
      humanScore++;
      humanScoreDiv.textContent = humanScore;
      resultContainer.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    } else if (result == -1) {
      computerScore++;
      computerScoreDiv.textContent = computerScore;
      resultContainer.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
    } else {
      resultContainer.textContent = `Draw, both players chose ${humanChoice}`;
    }
    if (humanScore >= 5) {
      alert("You won the Game!! Congrats");
      document
        .querySelectorAll(".choiceBtn")
        .forEach((btn) => btn.setAttribute("disabled", "true"));
    } else if (computerScore >= 5) {
      alert("You lost the Game!! Hard Luck");
      document
        .querySelectorAll(".choiceBtn")
        .forEach((btn) => btn.setAttribute("disabled", "true"));
    }
  })
);
