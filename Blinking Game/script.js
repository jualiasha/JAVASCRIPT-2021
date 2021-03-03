let circles = document.querySelectorAll(".circle");
const delay = 1000;
let counter;
let active = document.getElementsByClassName("active");

function GetCircle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const StartGame = () => {
  switch (GetCircle(1, 4)) {
    case 1:
      document.querySelector(".circle:first-child").classList.add("active");
      break;
    case 2:
      document.querySelector(".circle:nth-child(2)").classList.add("active");
      break;
    case 3:
      document.querySelector(".circle:nth-child(3)").classList.add("active");
      break;
    case 4:
      document.querySelector(".circle:nth-child(4)").classList.add("active");
      break;
  }
};

const gamego = setInterval(StartGame, delay);
