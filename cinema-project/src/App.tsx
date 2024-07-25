
import { useState } from "react";
import "./App.css";
import MySeat from "./MySeat";

function App() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [warning, setWarning] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    let value = parseInt(e.target.value, 10);
    if (value > 10) {
      value = 10;
      setWarning("El valor no puede ser mayor que 10");
    } else {
      setWarning("");
    }
    if (value < 0) value = 0; 
    if (type === "Row") {
      setRow(value);
    } else {
      setColumn(value);
    }
  };

  const createSeats = () => {
    let seats = [];
    for (let i = 0; i < row; i++) {
      let rowSeats = [];
      for (let j = 0; j < column; j++) {
        const seatCode = `${String.fromCharCode(65 + i)}${j + 1}`;
        rowSeats.push(<MySeat key={`seat-${i}-${j}`} code={seatCode} />);
      }
      seats.push(
        <div key={`row-${i}`} className="seat-row">
          {rowSeats}
        </div>
      );
    }
    return seats;
  };

  return (
    <>
      <div className="principal-container">
        <div className="info-container">
          <h1>Cinema 🍿</h1>
          <input
            onChange={(e) => onChange(e, "Row")}
            type="number"
            name="row"
            placeholder="Row"
            className="input-data"
          />
          {warning && <span className="warning">{warning}</span>}
          <input
            onChange={(e) => onChange(e, "Column")}
            type="number"
            name="column"
            placeholder="Column"
            className="input-data"
          />
          {warning && <span className="warning">{warning}</span>}
          <div>
            <div className="cinema-seats">{createSeats()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
