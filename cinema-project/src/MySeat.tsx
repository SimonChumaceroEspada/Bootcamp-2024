import React, { useState } from 'react';
import seatImage from './assets/seat.png';
import reservedSeatImage from './assets/seatReserved.png';

interface MySeatProps {
  code: string;
}

function MySeat({ code }: MySeatProps) {
  const [isReserved, setIsReserved] = useState(false);

  const reserveSeat = () => {
    setIsReserved(!isReserved);
  };

  return (
    <div className="seat" onClick={reserveSeat}>
      <img src={isReserved ? reservedSeatImage : seatImage} alt="" />
      <span>{code}</span>
    </div>
  );
}

export default MySeat;