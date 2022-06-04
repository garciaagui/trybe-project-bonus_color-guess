const balls = document.getElementsByClassName('ball');
const guessColor = document.querySelector('#rgb-color');
const tryAnswer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
let scoreValue = 0;
const score = document.querySelector('#score');

function setScoreValue() {
  score.innerHTML = `Placar: ${scoreValue}`;
}

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

function clickLogic(x) {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === x) {
        tryAnswer.innerHTML = 'Acertou!';
        scoreValue += 3;
        setScoreValue();
      } else {
        tryAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

function activeGameLogic() {
  const randomBallBgColor = selectRandomBall();
  const onlyNumbers = randomBallBgColor.replace('rgb', '');
  guessColor.innerHTML = onlyNumbers;
  clickLogic(randomBallBgColor);
}

function resetGame() {
  tryAnswer.innerHTML = 'Escolha uma cor';
  setBallsColors();
  activeGameLogic();
}

window.addEventListener('load', setBallsColors);
window.addEventListener('load', activeGameLogic);
window.addEventListener('load', setScoreValue);
resetBtn.addEventListener('click', resetGame);
