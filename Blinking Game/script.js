let circles = document.querySelectorAll(".circle");
let delay = 1000;
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("popup");
let leveloverlay = document.getElementById("popup-level");
let gameover = document.getElementById("final");
let startbutton = document.getElementById("start");
let stopbutton = document.getElementById("stop");
let GameoverSound = new sound("game-over.mp3");
let myMusic = new sound("no-mozart.mp3");
let levelsound = new sound("level.mp3");
let musicspeed = 1;
let level = 1;

let close = document.getElementById("close");
let score = 0;
let active = 0;
let activecounter = 0;
let timer;

function GetCircle(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
  this.speed = function (i) {
    this.sound.playbackRate = i;
  };
}

const startGame = () => {
  startbutton.style.display = "none";
  stopbutton.style.display = "block";
  myMusic.play();
  myMusic.speed(musicspeed);
  circles.forEach((el) => {
    el.classList.add("circle-game");
  });
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
    //console.log("clicked:", i);

    if (active == i) {
      score++;
    } else {
      endGame();
    }

    if (score % 2 == 0) {
      delay -= 50;
      myMusic.speed(musicspeed + 0.3);
    }
    console.log(`delay from f ${delay}`);

    scoredisplay.textContent = ` ${score}`;

    if (score % 7 == 0 && active == i) {
      level++;
      levelsound.play();
      leveloverlay.style.display = "block";
      document.getElementById("level").textContent = level;

      document
        .getElementById("continue")
        .addEventListener("click", function () {
          leveloverlay.style.display = "none";
        });
    }
  };

  let nextActive = pickNew(active);

  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");

  active = nextActive;

  //console.log("Active:", active);

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

  overlay.style.display = "block";
  if (score == 0) {
    gameover.textContent = `Your score is ${score}, are you sleeping? Catch it!!`;
  } else {
    gameover.textContent = `Your score is ${score}. Level ${level} Good, but you can catch more!`;
  }
  myMusic.stop();
  GameoverSound.play();
  active = 5;
};

const reloadGame = () => {
  window.location.reload();
};

close.addEventListener("click", reloadGame);
startbutton.addEventListener("click", startGame);
stopbutton.addEventListener("click", endGame);
