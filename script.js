console.log(localStorage.getItem("counter"));
let pokemonName = document.getElementById("name");
let imgContainer = document.getElementById("img-container");
let button = document.getElementById("get-pokemon");
let img = document.getElementById("nuotrauka");
let skaicius = document.getElementById("counter");
let reset = document.getElementById("reset");

const getPokemon = async function () {
  let randomNumber = Math.floor(Math.random() * 905);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
  );
  const data = await response.json();
  console.log(data);
  pokemonName.textContent =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);
  // const img = document.createElement("img");
  img.src = data.sprites.front_default;
  // imgContainer.append(img);
};

if (localStorage.getItem("counter") == 0) {
  let counter = 0;
}
if (localStorage.getItem("counter") !== 0) {
  counter = localStorage.getItem("counter");
}

button.addEventListener("click", function () {
  getPokemon();
  counter++;
  localStorage.setItem("counter", counter);
  skaicius.innerText = localStorage.getItem("counter", counter);
});
skaicius.innerText = localStorage.getItem("counter", counter);

reset.addEventListener("click", function () {
  counter = 0;
  localStorage.setItem("counter", 0);
  skaicius.innerText = localStorage.getItem("counter", counter);
});
