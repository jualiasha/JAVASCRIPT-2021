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
let activecounter = 0;
let timer;

const ClickCircles = () => {
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
    }

    if (score % 3 == 0) {
      delay = delay - 100;
    }

    scoredisplay.textContent = ` ${score}`;
  };
};

function GetCircle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = () => {
  console.log("Game started");
  startbutton.style.display = "none";
  stopbutton.style.display = "block";

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
  if (active >= 0) {
    activecounter++;
  }
  if (activecounter > 3 && score == 0) {
    return endGame();
  }
  const clicked = (i) => {
    console.log("clicked:", i);

    if (active == i) {
      score++;
    } else {
      endGame();
    }

    if (score % 3 == 0) {
      delay = delay - 50;
    }

    scoredisplay.textContent = ` ${score}`;
  };

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
if (activecounter - score > 3) {
  endGame();
}

const endGame = () => {
  clearTimeout(timer);
  console.log("Game over");
  overlay.style.display = "block";
  if (score == 0) {
    gameover.textContent = `Your score is ${score}, are you sleeping? Catch it!!`;
  } else {
    gameover.textContent = `Your score is ${score}. Good, but you can catch more!`;
  }

  active = 5;
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
stopbutton.addEventListener("click", endGame);
