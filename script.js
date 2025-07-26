const getComputerChoice = (choice = Math.floor(Math.random() * 3)) =>
  choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";

