const balls = document.getElementsByClassName('ball');
const guessColor = document.querySelector('#rgb-color');
const tryAnswer = document.querySelector('#answer');

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

function activeGameLogic() {
  const randomBallBgColor = selectRandomBall();
  const onlyNumbers = randomBallBgColor.replace('rgb', '');
  guessColor.innerHTML = onlyNumbers;
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === randomBallBgColor) {
        tryAnswer.innerHTML = 'Acertou!';
      } else {
        tryAnswer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  }
}

window.addEventListener('load', setBallsColors);
window.addEventListener('load', activeGameLogic);
