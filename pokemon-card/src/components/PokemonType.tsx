import React from "react";

interface TypeProps {
  pokemonData: {
    types: { type: { name: string } }[];
  };
}

function PokemonType({ pokemonData }: TypeProps) {
  return (
    <div className="type-container">
      {pokemonData.types.map((typeInfo, index) => (
        <p key={index} className="pokemon-type">
          {typeInfo.type.name}
        </p>
      ))}
    </div>
  );
}

export default PokemonType;