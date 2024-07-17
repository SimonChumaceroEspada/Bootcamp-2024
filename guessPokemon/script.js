const url = "https://pokeapi.co/api/v2/pokemon";

function getPokemon(id) {
  return fetch(`${url}/${id}`)
    .then((data) => data.json())
    .then((data) => data);
}

async function getPokemon2(id) {
  const json = await fetch(`${url}/${id}`);
  const data = await json.json();
  return data.name;
}

getPokemon2(25).then((name) => {
  document.getElementById("name").innerHTML = name;
  console.log(name);
});
function getImageID(id) {
  console.log(id);
  const imageString = "00" + id;
  return imageString.slice(-3);
}

function getRandomPokemonId() {
  // Genera un ID aleatorio para un Pokémon entre 1 y 151 
  return Math.floor(Math.random() * 151) + 1;
}

function searchRandomPokemon() {
  const pokemonId = getRandomPokemonId();
  const id = getImageID(pokemonId);

  getPokemon(pokemonId).then((data) => {
    if (data) {
      const pokemonInfoDiv = document.getElementById("pokemon-info");
      pokemonInfoDiv.innerHTML = `
        <img class = "hide" src= ${
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
          id +
          ".png"
        }>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Type: ${data.types
            .map((typeInfo) => typeInfo.type.name)
            .join(", ")}</p>
        `;
    }
  });
}

async function setupGame() {
  const correctId = getRandomPokemonId();
  const correctData = await getPokemon(correctId);
  const wrong1Data = await getPokemon(getRandomPokemonId());
  const wrong2Data = await getPokemon(getRandomPokemonId());

  // Asegúrate de que los IDs incorrectos sean únicos y diferentes del correcto
  if (
    correctData.id === wrong1Data.id ||
    correctData.id === wrong2Data.id ||
    wrong1Data.id === wrong2Data.id
  ) {
    // Intenta de nuevo si hay duplicados
    setupGame();
    return;
  }

  const options = [correctData.name, wrong1Data.name, wrong2Data.name];
  shuffleArray(options); // Mezcla las opciones para que la correcta no esté siempre en la misma posición

  document.getElementById("option1").textContent = options[0];
  document.getElementById("option2").textContent = options[1];
  document.getElementById("option3").textContent = options[2];

  // Guarda la respuesta correcta posterior verificación
  document
    .getElementById("options")
    .setAttribute("data-correct", correctData.name);

  // Muestra la imagen del Pokémon
  const pokemonInfoDiv = document.getElementById("pokemon-image");
  pokemonInfoDiv.innerHTML = `<img class="hide" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${correctId
    .toString()
    .padStart(3, "0")}.png">`;
}

function checkAnswer(optionNumber) {
  const selectedOption = document.getElementById(
    `option${optionNumber}`
  ).textContent;
  const correctAnswer = document
    .getElementById("options")
    .getAttribute("data-correct");

  if (selectedOption === correctAnswer) {
    document.getElementById(`option${optionNumber}`).style.backgroundColor =
      "green";
  } else {
    document.getElementById(`option${optionNumber}`).style.backgroundColor =
      "red";
  }

  // Quitar la clase 'hide' de la imagen
  document.querySelector("#pokemon-image img").classList.remove("hide");

  // Deshabilitar botones después de seleccionar una respuesta
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;

  // Recargar la página después de 2 segundos
  setTimeout(function () {
    window.location.reload();
  }, 2000);
}

// Función auxiliar para mezclar un array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener("DOMContentLoaded", setupGame);
