const getComputerChoice = (choice = Math.floor(Math.random() * 3)) =>
  choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
const getHumanChoice = () =>
  prompt("Enter rock, paper or scissors").toLowerCase();
let humanScore = 0,
  computerScore = 0;
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) return 0;
  const scn1 = humanChoice == "rock" && computerChoice == "scissors";
  const scn2 = humanChoice == "scissors" && computerChoice == "paper";
  const scn3 = humanChoice == "paper" && computerChoice == "rock";
  if (scn1 || scn2 || scn3) return 1;
  return -1;
};
const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    if (result == 1) {
      console.log(`You win, ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (result == -1) {
      console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log(`Draw, both chose ${humanChoice}`);
    }
  }
  console.log(
    `Game Result: ${
      humanScore == computerScore
        ? "Draw"
        : humanScore > computerScore
        ? "Player wins"
        : "Computer wins"
    }`
  );
};
playGame();
