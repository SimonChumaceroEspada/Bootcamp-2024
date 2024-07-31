import { useState, useEffect } from "react";

function getRandomPokemonNumber() {
  return Math.floor(Math.random() * 151) + 1;
}

export function usePokemonData() {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonNumber, setPokemonNumber] = useState<number>(
    getRandomPokemonNumber()
  );

  useEffect(() => {
    function fetchPokemonData(number: number) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error fetching Pokémon data:", error));
    }

    fetchPokemonData(pokemonNumber);
  }, [pokemonNumber]);

  return { pokemonData, setPokemonNumber, getRandomPokemonNumber };
}
