import { useEffect, useState } from "react";

const LIMIT = 25;
const getUrl = (limit: number = 25, offset = 0) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: string[];
};

function fetchData(url: string) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) =>
      Promise.all(
        data.results.map(async (pokemon: any) => {
          const pokemonDetails = await fetch(pokemon.url).then((res) =>
            res.json()
          );
          return {
            ...pokemon,
            id: pokemon.url.split("/")[6],
            types: pokemonDetails.types.map(
              (typeInfo: any) => typeInfo.type.name
            ),
          };
        })
      )
    );
}

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const url = getUrl(LIMIT, currentOffset);
    fetchData(url).then((data) => {
      setPokemons((old) => [...old, ...data]);
      setLoading(false);
    });
  }, [currentOffset]);

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      setCurrentOffset((prevOffset) => prevOffset + LIMIT);
    }
  };

  return { pokemons, loading, loadMore };
}
