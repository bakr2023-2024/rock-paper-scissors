const getComputerChoice = (choice = Math.floor(Math.random() * 3)) =>
  choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
const getHumanChoice = () =>
  prompt("Enter rock, paper or scissors").toLowerCase();
let humanScore = 0,
  computerScore = 0;
document
  .querySelectorAll(".playerAvatar")
  .forEach((img) =>
    img.setAttribute(
      "src",
      `https://i.pravatar.cc/500?img=${Math.random() * 70 + 1}`
    )
  );
document
  .querySelectorAll(".choiceBtn")
  .forEach((btn) =>
    btn.addEventListener("click", (e) =>
      console.log(playRound(e.target.dataset.choice, getComputerChoice()))
    )
  );

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) return 0;
  const scn1 = humanChoice == "rock" && computerChoice == "scissors";
  const scn2 = humanChoice == "scissors" && computerChoice == "paper";
  const scn3 = humanChoice == "paper" && computerChoice == "rock";
  if (scn1 || scn2 || scn3) return 1;
  return -1;
};
