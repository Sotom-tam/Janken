// const popoverTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="popover"]'
// );
// const popoverList = [...popoverTriggerList].map(
//   (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEL)
// );
let human = document.getElementById("score");
let computer = document.getElementById("computerScore");
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let options = ["rock", "paper", "scissors"];
//gettting all the buttons that have the class .option
//these are thr buttons that enable the user to choose their option.
y = document.querySelectorAll(".option");
// let test = document.getElementById("test");
// test.addEventListener("click", playRound());
//This function is to randomly choose an item in the options array
function getComputerChoice(choices) {
  let i = document.querySelectorAll(".comp");
  i.forEach(function (x) {
    x.style.display = "none";
  });
  //this is to help with the game effects
  let a = "Comp";
  //this generates a random decimal between 0 and 1
  let x = Math.random();
  // this multiplies the decimal so it's range is from 0 to the length og the array but still decimal
  let y = x * choices.length;
  //The Math.floor method then rounds it up, so it's an integer i.e 0,1 or 2
  let z = Math.floor(y);
  //This defines the computer's choice
  computerChoice = choices[z];
  //this is to select the graphic that shows depending on the option that's chosen
  let b = computerChoice + a;
  //console.log(`${x}, ${y}, ${z},${computerChoice}`);
  let s = document.getElementById(`${b}`);
  s.style.display = "block";
  console.log(b, s);
  return computerChoice;
}
//testing out the first function
//let result = getComputerChoice(options);

//This function is supposed to get us what the human chooses
//It's triggered by the push of the button

//this is how I trigger the human choice
//using for each to replace a for loop
//then I'll add the event listener for every btn with the class .option

y.forEach(function (x) {
  x.addEventListener("click", function () {
    humanChoice = this.childNodes[4].innerText;
    console.log(`The Human Choice is: ${humanChoice}`);
    return humanChoice;
  });
});

y.forEach(function (x) {
  let a = document.querySelectorAll(".hand");
  x.addEventListener("click", function () {
    getComputerChoice(options);
    a.forEach(function (z) {
      z.style.display = "none";
    });
    let t = this.childNodes[4].innerText;
    let x = t.toLowerCase();
    let h = "Hand";
    let y = x + h;
    //showing the bigger svgs
    //Or rather I want to show the one that corresponds to what is clicked
    let element = document.getElementById(`${y}`);
    element.style.display = "block";
    console.log(x, h, y, element);
  });
});
y.forEach(function (x) {
  x.addEventListener("click", playRound);
});
//function for the countdown when Game starts
function countDown() {
  document.getElementById("choose").classList.remove("visible");
  //to hide the play button
  const a = document.getElementById("play");
  a.style.display = "none";
  let x = document.getElementById("count");
  let i = 0;
  let set = setInterval(() => {
    x.innerHTML = options[i];
    i++;
    if (i > 3) {
      clearInterval(set);
      let x = document.getElementById("count");
      x.style.border = "none";
      x.innerHTML = "";
      document.getElementById("choose").classList.add("visible");
      y.forEach(function (x) {
        x.style.display = "block";
      });
    }
  }, 800);
}
//This is for setting Rounds
function playGame() {}

function playRound(x, y) {
  x = computerChoice;
  console.log(`Computer: ${x}`);
  p = humanChoice;
  console.log(`Human: ${y}`);
  let a = x.toLowerCase();
  let b = p.toLowerCase();
  //checking if it's a tie
  if (a === b) {
    console.log("A tie");
    //this compares scissors and paper, console logs the one that wins
  } else if (
    (a === "scissors" && b === "paper") ||
    (a === "paper" && b === "scissors")
  ) {
    console.log("Scissors beats paper");
    //Nested if to check who played the one that won
    if (a === "scissors") {
      computerScore += 5;
      console.log("Computer wins");
    } else {
      humanScore += 5;
      console.log("You Win", humanScore);
    }
  } else if (
    (a === "scissors" && b === "rock") ||
    (a === "rock" && b === "scissors")
  ) {
    console.log("Rock beats Scissors");
    if (a === "rock") {
      computerScore += 5;
      console.log("Computer wins", computerScore);
    } else {
      humanScore += 5;
      console.log("You Win", humanScore);
    }
  } else if (
    (a === "rock" && b === "paper") ||
    (a === "paper" && b === "rock")
  ) {
    console.log("Paper beats Rock");
    if (a === "paper") {
      computerScore += 5;
      console.log("Computer wins", computerScore);
    } else {
      humanScore += 5;
      console.log("You Win", humanScore);
    }
  } else if (b === "") {
    computerScore += 5;
    console.log("You didn't choose an option!\nComputerwins by Default!");
  }
  console.log(
    `Compter Score is: ${computerScore}\nYour Score is: ${humanScore}`
  );
  computer.innerText = computerScore.toString();
  human.innerText = humanScore.toString();
  if (computerScore === 20) {
    let u = "Computer";
    Declare(u);
    computer.innerText = "";
    human.innerText = "";
    let y = document.querySelectorAll(".option");
    y.forEach((x) => {
      x.style.display = "none";
    });
    let a = document.getElementById("play");
    a.style.display = "block";
  } else if (humanScore === 20) {
    let u = "You";
    Declare(u);
    computer.innerText = "";
    human.innerText = "";
    y.forEach((x) => {
      x.style.display = "none";
    });
    let a = document.getElementById("play");
    a.style.display = "block";
  }
}
function Declare(x) {
  let y = " Win!";
  document.getElementById("choose").innerText = x + y;
}
//This is to show user buttons for options when the user clicks play
// function show(x) {
//   //x = document.getElementById("btnGroup").style.display="block";
//   for (i = 0; i < y.length; i++) {
//     y[i].style.display = "inline-flex";
//   }
// }

const overlap = document.getElementById("overlap");
// this is an observer constructor
//it runs the function when the game section is in the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      overlap.classList.add("openingScenario");
    } else {
      overlap.classList.remove("openingScenario");
    }
  });
});
//Calling it here to observe the game section
//basically I'm saying "watch game section", if it's viewport(the root) the run function
observer.observe(document.getElementById("gameSection"));
