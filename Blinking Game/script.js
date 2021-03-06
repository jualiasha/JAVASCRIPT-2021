let circles = document.querySelectorAll(".circle");
let delay = 1000;
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("popup");
let gameover = document.getElementById("final");
let startbutton = document.getElementById("start");
let stopbutton = document.getElementById("stop");

let close = document.getElementById("close");
let score = 0;
let active = 0;

circles[0].onclick = function () {
  clicked(0);
};
circles[1].onclick = function () {
  clicked(1);
};
circles[2].onclick = function () {
  clicked(2);
};
circles[3].onclick = function () {
  clicked(3);
};

const clicked = (i) => {
  console.log("clicked:", i);

  if (active == i) {
    score++;
  } else {
    endGame();
    return score; //here i need to stop score counting
  }

  if (score % 3 == 0) {
    delay = delay - 100;
  }

  scoredisplay.textContent = ` ${score}`;
};

function GetCircle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = () => {
  console.log("Game started");

  let nextActive = pickNew(active);

  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");

  active = nextActive;

  console.log("Active:", active);

  timer = setTimeout(startGame, delay);

  function pickNew(active) {
    let nextActive = GetCircle(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

const endGame = () => {
  clearTimeout(timer);
  console.log("Game over");
  overlay.style.display = "block";
  gameover.textContent = `Your score is ${score}`;
};

const reloadGame = () => {
  console.log("what?");
  window.location.reload();
};

function Checkclick() {
  for (let i = 0; i < 4; i++)
    if (active == clicked(i)) {
      console.log("ura");
    } else {
      console.log("game over");
    }
}

close.addEventListener("click", reloadGame);
startbutton.addEventListener("click", startGame);
