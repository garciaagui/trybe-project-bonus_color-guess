const balls = document.getElementsByClassName('ball');

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red} , ${blue} , ${green})`;
  return randomColor;
}

function setBallsColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColor();
  }
}

window.addEventListener('load', setBallsColors);
