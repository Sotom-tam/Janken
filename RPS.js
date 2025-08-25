let humanScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];
//This function is to randomly choose an item in the options array
function getComputerChoice(choices) {
  //this generates a random decimal between 0 and 1
  let x = Math.random();
  // this multiplies the decimal so it's range is from 0 to the length og the array but still decimal
  let y = x * choices.length;
  //The Math.floor method then rounds it up, so it's an integer i.e 0,1 or 2
  let z = Math.floor(y);
  //This defines the computer's choice
  let computerChoice = choices[z];
  //console.log(`${x}, ${y}, ${z},${computerChoice}`);
  return computerChoice;
}
//testing out the first function
//let result = getComputerChoice(options);
function getHumanChoice() {
  let humanChoice = prompt("Enter your Option please");
  //console.log(humanChoice);
  return humanChoice;
}
function playRound(x, y) {
  x = getComputerChoice(options);
  console.log(x);
  y = getHumanChoice();
  let a = x.toLowerCase(x);
  let b = y.toLowerCase(y);
  if (a === b) {
    console.log("A tie");
  } else if (
    (a === "scissors" && b === "paper") ||
    (a === "paper" && b === "scissors")
  ) {
    console.log("Scissors beats paper");
    if (a === "scissors") {
      console.log("Computer wins");
    } else {
      console.log("You Win");
    }
  } else if (
    (a === "scissors" && b === "rock") ||
    (a === "rock" && b === "scissors")
  ) {
    console.log("Rock beats Scissors");
    if (a === "rock") {
      console.log("Computer wins");
    } else {
      console.log("You Win");
    }
  } else if (
    (a === "rock" && b === "paper") ||
    (a === "paper" && b === "rock")
  ) {
    console.log("Paper beats Rock");
    if (a === "paper") {
      console.log("Computer wins");
    } else {
      console.log("You Win");
    }
  }
}
