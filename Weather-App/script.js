let button = document.querySelector("button");
let weather = [];
let result = document.getElementById("result");

async function GetWearher(event) {
  event.preventDefault();
  let city = await document.getElementById("city").value;
  console.log(city);
  let resp = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=32d270017730f45ec35b1f40125ca352`
  );
  let json = await resp.json();
  weather = json;
  console.log(weather);
  result.innerHTML = `<h3>temperature now: ${weather.main.temp}</h3><h3>feels like: ${weather.main.feels_like}</h3><h3>weather: ${weather.weather[0].description}</h3>`;
}

button.addEventListener("click", GetWearher);
