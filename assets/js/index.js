'use strict'

const rounds = document.querySelectorAll('input[type="radio"]')
const roundsSection = document.querySelector('.rounds-section')

const scoreSection = document.body.querySelector('.score-section')
const userScoreOutput = document.body.querySelector('.user')
const cpuScoreOutput = document.body.querySelector('.comp')
const roundsAmountCounter = document.body.querySelector('.round-amount-counter')

const choiceContainer = document.body.querySelector('.choices')
const playerChoiceContainer = document.body.querySelector('.player-choice')
const buttonsChoice = document.querySelectorAll('.button-choice')

const restartBtn = document.body.querySelector('.restart')

const weapons = ['rock', 'paper', 'scissors']
let cpuChoice
let playerScore = 0
let cpuScore = 0
let currentRound = 0
let amountRounds
let winner = ''

const roundsAmount = () => {
  rounds.forEach(element => {
    if (element.checked) {
      console.log(element.value)
      amountRounds = Number(element.value)
      return element.value
    }
  })
}

const handlePlayerChoice = event => {
  if (currentRound === amountRounds) {
    return
  } else if (amountRounds === undefined) {
    return
  }

  const playerChoice = event.currentTarget.value

  if (playerChoice === 'rock') {
    console.log(playerChoice)
  } else if (playerChoice === 'paper') {
    console.log(playerChoice)
  } else if (playerChoice === 'scissors') {
    console.log(event.currentTarget.value)
  } else if (!playerChoice.classList.contains('choice')) {
    return
  }

  const computerPlay = () => {
    cpuChoice = Math.floor(Math.random() * weapons.length)
    console.log(cpuChoice)
    return weapons[cpuChoice]
  }

  let cpuChoiceResult = computerPlay()

  if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    console.log(cpuChoiceResult)
    currentRound++
  }

  roundsAmountCounter.textContent = `${currentRound} / ${amountRounds}`

  if (playerChoice === cpuChoiceResult) {
    choiceContainer.innerHTML = '<span class="draw-output">Draw</span>'
    winner = 'draw'
  }

  if (cpuChoiceResult === 'paper' && playerChoice === 'rock') {
    choiceContainer.innerHTML =
      'paper <span class="all-player">(comp)</span> beats rock <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
    winner = 'cpu'
  }

  if (playerChoice === 'paper' && cpuChoiceResult === 'rock') {
    choiceContainer.innerHTML =
      'paper <span class="all-player">(player)</span> beats rock <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
    winner = 'player'
  }

  if (cpuChoiceResult === 'scissors' && playerChoice === 'rock') {
    choiceContainer.innerHTML =
      'rock <span class="all-player">(player)</span> beats scissors <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
    winner = 'player'
  }

  if (playerChoice === 'scissors' && cpuChoiceResult === 'rock') {
    choiceContainer.innerHTML =
      'rock <span class="all-player">(comp)</span> beats scissors <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
    winner = 'cpu'
  }

  if (cpuChoiceResult === 'paper' && playerChoice === 'scissors') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(player)</span> beats paper <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
    winner = 'player'
  }

  if (playerChoice === 'paper' && cpuChoiceResult === 'scissors') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(comp)</span> beats paper <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
    winner = 'cpu'
  }

  circleColor(event)
}

const circleColor = event => {
  let colorClass = ''
  if (winner === 'player') {
    event.currentTarget.classList.add('win')
    colorClass = 'win'
  } else if (winner === 'draw') {
    event.currentTarget.classList.add('draw')
    colorClass = 'draw'
  } else if (winner === 'cpu') {
    event.currentTarget.classList.add('lose')
    colorClass = 'lose'
  }

  setTimeout(() => {
    event.target.closest('button').classList.remove(colorClass)
  }, 800)
}

roundsAmount()
roundsSection.addEventListener('click', roundsAmount)

buttonsChoice.forEach(button => {
  button.addEventListener('click', handlePlayerChoice)
})

restartBtn.addEventListener('click', () => {
  location.reload()
})
