var pokemons = [];
var pokemon = {};
var img = [];

let url;

async function GetPokemons() {
  let resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
  );
  let json = await resp.json();
  pokemons = json.results;
  console.log(pokemons);

  for (let i = 0; i < pokemons.length; i++) {
    let li = document.createElement("li");
    document
      .querySelector("#pokemons")
      .appendChild(
        li
      ).innerHTML = `${pokemons[i].name}<div class="popup"></div>`;
    li.addEventListener("click", GetLink);

    function GetLink() {
      console.log(pokemons[i]);
      fetch(pokemons[i].url)
        .then((response) => response.json())
        .then((json) => {
          img = json.sprites.front_default;
          console.log(img);
          let popup = document.querySelector(".popup");
          popup.style.display = "block";
          popup.innerHTML = `<img src="${img}">`;
        });
    }
  }
}
GetPokemons();
