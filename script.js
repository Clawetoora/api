let pokemonName = document.getElementById("name");
let imgContainer = document.getElementById("img-container");
let button = document.getElementById("get-pokemon");
let img = document.getElementById("nuotrauka");
let skaicius = document.getElementById("counter");
let reset = document.getElementById("reset");
let card = document.getElementById("img-wrapper");
let tipas = document.getElementById("tipas");

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
  if (!data.sprites.front_default) {
    return;
  }
  img.src = data.sprites.front_default;
  // imgContainer.append(img);
  let type = await data.types[0].type.name;
  console.log(type);
  tipas.innerHTML = "Type " + type;
  if (type === "water") {
    card.style.backgroundColor = "#1551E6";
  }
  if (type === "electric") {
    card.style.backgroundColor = "#E0E42D";
  }
  if (type === "ghost") {
    card.style.backgroundColor = "#8E688E";
  }
  if (type === "poison") {
    card.style.backgroundColor = "#5C2D8A";
  }
  if (type === "bug") {
    card.style.backgroundColor = "#1C4B29";
  }
  if (type === "grass") {
    card.style.backgroundColor = "#147B3D";
  }
  if (type === "rock") {
    card.style.backgroundColor = "#48180B";
  }
  if (type === "fire") {
    card.style.backgroundColor = "#AB1F25";
  }
  if (type === "ground") {
    card.style.backgroundColor = "#A7712A";
  }
  if (type === "normal") {
    card.style.backgroundColor = "#75515B";
  }
  if (type === "steel") {
    card.style.backgroundColor = "#5F756D";
  }
  if (type === "fairy") {
    card.style.backgroundColor = "#971944";
  }
  if (type === "fighting") {
    card.style.backgroundColor = "#94431F";
  }
  if (type === "ice") {
    card.style.backgroundColor = "#89D0F3";
  }
  if (type === "psychic") {
    card.style.backgroundColor = "#A42A6C";
  }
  if (type === "dark") {
    card.style.backgroundColor = "#040706";
  }
  if (type === "flying") {
    card.style.backgroundColor = "#4A667F";
  }
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
