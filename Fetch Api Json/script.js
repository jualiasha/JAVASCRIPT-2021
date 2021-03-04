var pokemons = [];
var pokemon = {};
var img = [];
let popup = document.getElementById("popup");
let url;

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
    pokemon = {
      name: pokemons[i].name,
      url: pokemons[i].url,
    };
    //console.log(pokemon.index);
    let div = document.createElement("div");
    div.className = "wow";
    document
      .querySelector("#pokemons")
      .appendChild(div).innerHTML = `${pokemon.name}`;

    div.addEventListener("click", GetImage);
  }

  async function GetImage() {
    let resp = await fetch(pokemon.url);
    let json = await resp.json();
    img = json.sprites.front_default;
    console.log(img);
  }
}

GetPokemons();
