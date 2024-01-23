const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice

    generateResult()
    resultDisplay.innerHTML = result
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    // console.log(randomNumber)
    if(randomNumber === 0)
    {
        computerChoice = 'rock'
    }
    if(randomNumber === 1)
    {
        computerChoice = 'paper'
    }
    if(randomNumber === 2)
    {
        computerChoice = 'scissors'
    }
}

function generateResult()
{
    if(userChoice === computerChoice)
    {
        result = 'Its a Draw'
    }
    if(userChoice === 'rock' && computerChoice === 'paper')
    {
        result = 'The Computer Wins'
    }
    if(userChoice === 'paper' && computerChoice === 'rock')
    {
        result = 'The User Wins'
    }
    if(userChoice === 'rock' && computerChoice === 'scissors')
    {
        result = 'The User Wins'
    }
    if(userChoice === 'scissors' && computerChoice === 'rock')
    {
        result = 'The Computer Wins'
    }
    if(userChoice === 'scissors' && computerChoice === 'paper')
    {
        result = 'The User Wins'
    }
    if(userChoice === 'paper' && computerChoice === 'scissors')
    {
        result = 'The Computer Wins'
    }
}