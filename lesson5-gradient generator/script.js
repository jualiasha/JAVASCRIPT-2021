let form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("#csscode");

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (event) => {
  event.preventDefault();
  let selectedValue;
  for (const v of direction) {
    if (v.checked) {
      selectedValue = v.value;
    }
  }

  console.log("wow it is working");
  console.log(color1.value);
  console.log(color2.value);
  console.log(direction);
  console.log(selectedValue);

  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value}  )`;

  text.textContent = `background-image: linear-gradient(${selectedValue}, ${color1.value}, ${color2.value}`;
};

form.addEventListener("submit", setGradient);
