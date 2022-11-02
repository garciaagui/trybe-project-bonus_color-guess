// Definição das Variáveis;
const balls = document.getElementsByClassName('ball');
const colorGuess = document.querySelector('#rgb-color');
const tryAnswer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const scoreboard = document.querySelector('#score');
let randomBallBgColor;
let rgbCode;
let score = 0;

// Definição das Funções;
function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red}, ${blue}, ${green})`;
  return randomColor;
}

function setBallsColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColor();
  }
}

function selectRandomBall() {
  const randomBall = balls[Math.floor(Math.random() * (balls.length - 1))];
  const randomBallBgColor = randomBall.style.backgroundColor;
  return randomBallBgColor;
}

function setScoreboardValue(value, action) {
  if (action === 'reset') score = value;
  else score += value;
  scoreboard.innerHTML = `Placar: ${score}`;
}

function activeGame() {
  randomBallBgColor = selectRandomBall();
  rgbCode = randomBallBgColor.replace('rgb', '');
  colorGuess.innerHTML = rgbCode;
}

function resetGame() {
  tryAnswer.innerHTML = 'Escolha uma cor';
  tryAnswer.style.backgroundColor = 'rgb(43, 45, 66)';
  setScoreboardValue(0, 'reset');
  setBallsColors();
  activeGame();
}

// Ativação das Funções;
window.addEventListener('load', () => {
  setBallsColors();
  activeGame();
  setScoreboardValue(0, 'reset');
});

resetBtn.addEventListener('click', resetGame);

for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === randomBallBgColor) {
      tryAnswer.innerHTML = 'Acertou!';
      tryAnswer.style.backgroundColor = 'rgb(0, 109, 119)';
      setScoreboardValue(3, 'add');
    } else {
      tryAnswer.innerHTML = 'Errou! Tente novamente!';
      tryAnswer.style.backgroundColor = 'rgb(217, 4, 41)';
      setScoreboardValue(0, 'add');
    }
    setBallsColors();
    activeGame();
  });
}