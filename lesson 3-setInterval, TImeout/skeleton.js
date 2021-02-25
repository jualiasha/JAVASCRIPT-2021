const NUMBER_OF_BULBS = 50;
const BLINKING_SPEED = 500;
const CHOSEN_BULB_INDEX = 10;

let bulbs = [];
let counter = 0;

while (counter < NUMBER_OF_BULBS) {
  const newbulb = document.createElement("div");
  newbulb.className = "bulb";
  document.querySelector("#light-bulbs").appendChild(newbulb);

  bulbs.push(false); // boolean value of false indicates a switch off bulb
  counter++;
}

counter = 0;
document.getElementsByClassName("bulb")[counter].classList.add("active");

bulbs[CHOSEN_BULB_INDEX] = true;
console.log(bulbs);

setInterval(() => {
  document.getElementsByClassName("bulb")[counter].classList.remove("active");
  bulbs[counter] = false; // switch off the current bulb

  // TODO: improve the logical if needed
  // if value of counter is not yet the index of the last bulb
  if (counter < NUMBER_OF_BULBS - 1) {
    counter++; // calculate the index of next bulb
    bulbs[counter] = true; // switch it on
  } else {
    // reached the end of the array
    counter = 0; // reset counter to the index of the first bulb
    bulbs[counter] = true; // switch it on
  }

  // remove these lines during development
  console.clear(); // this line will clear the console
  console.log(bulbs);
}, BLINKING_SPEED);

document.getElementById("stop-btn").addEventListener("click", () => {
  // TODO: stop the blinking and announce if user has won the game
});

/**
 * You don't have to care about this fn unless you want to
 * @param {NodeList} nodes the list of elements to be arranged in a circle
 * @return {void}
 */
const arrangeBulbsInACircle = (nodes) => {
  const radius = "12em",
    start = -90,
    $els = [...nodes], // turn nodelist into a real array
    numberOfEls = $els.length,
    slice = 360 / numberOfEls,
    index = 0;

  $els.forEach((el, index) => {
    const rotate = slndexce * index + start;
    const rotateReverse = rotate * -1;

    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};

// invoke the fn on the class bulb elements to create the effect
arrangeBulbsInACircle(
  document.getElementsByClassName("bulb").appendChild(newbulb)
);
