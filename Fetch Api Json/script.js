var pokemons = [];
var img = [];
let popup = document.getElementById("popup");

async function GetPokemons() {
  /* fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
    .then((resp) => resp.json())
    .then((json) => {}); */
  let resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
  );
  let json = await resp.json();
  pokemons = json.results;
  console.log(pokemons);

  for (let i = 0; i < pokemons.length; i++) {
    let text = pokemons[i].name;
    document.querySelector(
      "#pokemons"
    ).innerHTML += `<div class=wow>${pokemons[i].name}<div class="popup"></div></div>`;
  }
}

async function GetImage() {
  for (let i = 0; i < pokemons.length; i++) {
    let resp = await fetch(pokemons[i].url);
    let json = await resp.json();
    img = json.sprites.front_default;
    console.log(img);
  }
}

GetPokemons();
document.addEventListener("click", GetImage);
