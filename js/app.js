const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let random
let computerChoice
let result

/* Event On Click */
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  randomChoice()
  getResult()
}))

/* Generator Function  */
function randomChoice(){
  random = Math.floor(Math.random() * possibleChoices.length + 1)
  if(random === 1){
    computerChoice = "rock"
  }
  if(random === 2){
    computerChoice = "paper"
  }
  if(random === 3){
    computerChoice = "scissors"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

/* Result Function Who Win OR Lose OR Draw ? */
function getResult(){
  if(computerChoice === userChoice){
    result = "It's A Draw"
  }
  if(computerChoice === "rock" && userChoice === "paper"){
    result = "You Win"
  }
  if(computerChoice === "rock" && userChoice === "scissors"){
    result = "You Lose"
  }
  if(computerChoice === "paper" && userChoice === "rock"){
    result = "You Lose"
  }
  if(computerChoice === "paper" && userChoice === "scissors"){
    result = "You Win"
  }
  if(computerChoice === "scissors" && userChoice === "rock"){
    result = "You Win"
  }
  if(computerChoice === "scissors" && userChoice === "paper"){
    result = "You Lose"
  }
  resultDisplay.innerHTML = result
}