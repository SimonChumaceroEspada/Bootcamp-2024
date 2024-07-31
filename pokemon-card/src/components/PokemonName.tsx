
interface PokemonNameProps {
  pokemonData: any;
}

function PokemonName({ pokemonData }: PokemonNameProps) {


  return (
    <div className="name-container">
        <p># {pokemonData.id}</p>
      <p className="pokemon-name">{pokemonData.name}</p>
    </div>
  );
}

export default PokemonName;
