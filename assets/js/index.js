'use strict'

const rounds = document.querySelectorAll('input[type="radio"]')
const roundsSection = document.querySelector('.rounds-section')

const scoreSection = document.body.querySelector('.score-section')
const userScoreOutput = document.body.querySelector('.user')
const cpuScoreOutput = document.body.querySelector('.comp')
const roundsAmountCounter = document.body.querySelector('.round-amount-counter')

const choiceContainer = document.body.querySelector('.choices')
const playerChoiceContainer = document.body.querySelector('.player-choice')
const rockChoice = document.body.querySelector('.rock').value
const paperChoice = document.body.querySelector('.paper').value
const scissorsChoice = document.body.querySelector('.scissors').value

const restartBtn = document.body.querySelector('.restart')

const weapons = ['rock', 'paper', 'scissors']
let cpuChoice
let playerScore = 0
let cpuScore = 0
let currentRound = 0
let amountRounds

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

  if (event.target.value === 'rock') {
    console.log(event.target.value)
  } else if (event.target.value === 'paper') {
    console.log(event.target.value)
  } else if (event.target.value === 'scissors') {
    console.log(event.target.value)
  } else if (!event.target.classList.contains('choice')) {
    return
  }

  const computerPlay = () => {
    cpuChoice = Math.floor(Math.random() * weapons.length)
    console.log(cpuChoice)
    return weapons[cpuChoice]
  }

  let cpuChoiceResult = computerPlay()

  if (event.target.value === 'rock' || event.target.value === 'paper' || event.target.value === 'scissors') {
    console.log(cpuChoiceResult)
    currentRound++
  }

  roundsAmountCounter.textContent = `${currentRound} / ${amountRounds}`

  if (event.target.value === cpuChoiceResult) {
    choiceContainer.innerHTML = '<span class="draw">Draw</span>'
  }

  if (cpuChoiceResult === 'paper' && event.target.value === 'rock') {
    choiceContainer.innerHTML =
      'paper <span class="all-player">(comp)</span> beats rock <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
  } else if (event.target.value === 'paper' && cpuChoiceResult === 'rock') {
    choiceContainer.innerHTML =
      'paper <span class="all-player">(player)</span> beats rock <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
  }

  if (cpuChoiceResult === 'scissors' && event.target.value === 'rock') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(comp)</span> beats rock <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
  } else if (event.target.value === 'scissors' && cpuChoiceResult === 'rock') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(player)</span> beats rock <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
  }

  if (cpuChoiceResult === 'paper' && event.target.value === 'scissors') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(comp)</span> beats paper <span class="all-player">(player)</span>'
    cpuScore++
    cpuScoreOutput.textContent = cpuScore
  } else if (event.target.value === 'paper' && cpuChoiceResult === 'scissors') {
    choiceContainer.innerHTML =
      'scissors <span class="all-player">(player)</span> beats paper <span class="all-player">(comp)</span>'
    playerScore++
    userScoreOutput.textContent = playerScore
  }
}

roundsSection.addEventListener('click', roundsAmount)
playerChoiceContainer.addEventListener('click', handlePlayerChoice)

restartBtn.addEventListener('click', () => {
  location.reload()
})
