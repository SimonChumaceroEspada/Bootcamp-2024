import { usePokemonData } from "../hooks/usePokemonData";
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import ImageCard from "./ImageCard";

function Card() {
  const { pokemonData, setPokemonNumber, getRandomPokemonNumber } =
    usePokemonData();

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="card"
      onClick={() => setPokemonNumber(getRandomPokemonNumber())}
    >
      <div className="info-container">
        <PokemonName pokemonData={pokemonData} />
        <PokemonType pokemonData={pokemonData} />
      </div>
      <div className="image-container">
        <ImageCard pokemonData={pokemonData} />
      </div>
    </div>
  );
}

export default Card;
