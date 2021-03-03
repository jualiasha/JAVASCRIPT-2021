var pokemons = [];

async function GetPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
    .then((resp) => resp.json())
    .then((json) => {});
  let resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
  );
  let json = await resp.json();
  pokemons = json.results;
  console.log(pokemons);
  const GetImage = () => {
    let url = pokemons.url;
    let img = fetch(url);
  };
  for (let i = 0; i < pokemons.length; i++) {
    document.getElementById(
      "pokemons"
    ).innerHTML += `<a href="#">${pokemons[i].name}</a><br>`;
  }
}

GetPokemons();

const Names = () => {
  for (let i = 0; i < pokemons.length; i++) {
    return pokemons[i].name;
  }
};
