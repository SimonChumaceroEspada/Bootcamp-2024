// pokemon-card/src/components/ImageCard.tsx
import React from 'react';

interface ImageCardProps {
  pokemonData: any;
}

function ImageCard({ pokemonData }: ImageCardProps) {
  const imageUrl = pokemonData.sprites.front_default;

  return (
    <div className="card-image">
      <img src={imageUrl} alt={pokemonData.name} />
    </div>
  );
}

export default ImageCard;