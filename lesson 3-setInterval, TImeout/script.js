//2. select dom content
let Number_of_Bulbs = document.querySelector("input").value;

const delay = 500;
const winningbulb = 7;
let counter = 0;
let arrayofbulbs = [];
//creating the bulbs

while (counter < Number_of_Bulbs) {
  const newEl = document.createElement("div");
  newEl.className = "bulb";
  document.querySelector("#bulbs").appendChild(newEl);
  arrayofbulbs[counter] = false;
  counter++;
}

const arrangeBulbsInACircle = (nodes) => {
  const radius = "12em",
    start = -90,
    $els = [...nodes], // turn nodelist into a real array
    numberOfEls = $els.length,
    slice = 360 / numberOfEls,
    index = 0;

  $els.forEach((el, index) => {
    const rotate = slice * index + start;
    const rotateReverse = rotate * -1;

    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};

// invoke the fn on the class bulb elements to create the effect
arrangeBulbsInACircle(document.getElementsByClassName("bulb"));

//reset the pointer back of the first bulb
counter = 0;
arrayofbulbs[counter] = true; //initial bulb
document.getElementsByClassName("bulb")[counter].classList.add("active");
document.getElementsByClassName("bulb")[winningbulb].classList.add("chosen");

let gamego = setInterval(() => {
  //switch off
  arrayofbulbs[counter] = false;
  document.getElementsByClassName("bulb")[counter].classList.remove("active");

  //unless it is already the last bulb
  if (counter < Number_of_Bulbs - 1) {
    counter++;
  } else {
    counter = 0; //reset
  }
  arrayofbulbs[counter] = true;
  document.getElementsByClassName("bulb")[counter].classList.add("active");
  /*   console.clear();
  console.log(arrayofbulbs); */
}, delay);

stopthebulb = () => {
  let stop = document.querySelector("button");
  stop = clearInterval(gamego);
  let active = arrayofbulbs[counter];
  let text = document.querySelector("#winningtext");

  if (arrayofbulbs[winningbulb] == active) {
    console.log("jackpot");
    text.textContent = "JUUUUHUUUU!!! YOU ARE THE WINNER OF JACKPOT";
  } else {
    console.log("continue more");
    text.textContent = "TODAY YOU SHOULD TRY MORE";
  }
};

changebublenumber = () => {
  /*   let newbutton = document.createElement("BUTTON");
  newbutton.innerHTML = "More bulbs";

  if (typeof (newbutton != "undefined" && newbutton != null)) {
    document.body.appendChild(newbutton);
  } else {
    alert("You have played already this round. Start new game!");
  }
  newbutton.addEventListener("change", false); */
  clearInterval(gamego);
  document.querySelector("#bulbs").classList.remove("bulb")[counter];
  console.log("No bulbs div");

  /*   let amountofbulbs = document.querySelector("#amountofbulbs");

  Number_of_Bulbs = amountofbulbs.value;

  counter = 0;
  arrayofbulbs = [];
  //creating new bulbs

  while (counter < Number_of_Bulbs) {
    const newEl1 = document.createElement("div");
    newEl1.className = "bulb";
    document.querySelector("#bulbs").appendChild(newEl1);
    arrayofbulbs[counter] = false;
    counter++;
  } */
};
