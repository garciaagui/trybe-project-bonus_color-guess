// Definição das Variáveis;
const balls = document.getElementsByClassName('ball');
const colorGuess = document.querySelector('#rgb-color');
const tryAnswer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const scoreboard = document.querySelector('#score');
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

function setScoreboardValue(value) {
  score += value;
  scoreboard.innerHTML = `Placar: ${score}`;
}

function clickBalls(bgColor) {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === bgColor) {
        tryAnswer.innerHTML = 'Acertou!';
        setScoreboardValue(3);
      } else {
        tryAnswer.innerHTML = 'Errou! Tente novamente!';
        setScoreboardValue(0);
      }
    });
  }
}

function activeGame() {
  const randomBallBgColor = selectRandomBall();
  const rgbCode = randomBallBgColor.replace('rgb', '');
  colorGuess.innerHTML = rgbCode;
  clickBalls(randomBallBgColor);
}

function resetGame() {
  tryAnswer.innerHTML = 'Escolha uma cor';
  setBallsColors();
  activeGame();
}

// Ativação das Funções;
window.addEventListener('load', () => {
  setBallsColors();
  activeGame();
  setScoreboardValue(0);
});
resetBtn.addEventListener('click', resetGame);
