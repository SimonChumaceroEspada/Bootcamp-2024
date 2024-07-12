class Seat {
    #isAvailable;
    
    constructor() {
      this.#isAvailable = true;
    }
  
    reserve() {
      if (this.#isAvailable) {
        this.#isAvailable = false;
        return true; 
      } else {
        return false; 
      }
    }
  
    isAvailable() {
      return this.#isAvailable;
    }
  
    toString() {
      return this.#isAvailable ? 'O' : 'X';
    }
  }
  
  class Cinema {
    #columns;
    #rows;
    #seats;
  
    constructor(columns, rows) {
      this.#columns = columns;
      this.#rows = rows;
      this.#seats = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
        row.push(new Seat());
        }
        this.#seats.push(row);
      }
    }
  
    reserve(column, row) {
      if (column < 0 || column >= this.#columns || row < 0 || row >= this.#rows) {
        console.log("Invalid seat position");
        return;
      }
  
      const seat = this.#seats[row][column];
      if (seat.reserve()) {
        console.log("Seat Reserved");
      } else {
        console.log("Seat already reserved, choose another seat");
      }
    }
  
    showCinema() {
      for (let row of this.#seats) {
        console.log(row.map(seat => seat.toString()).join(' '));
      }
    }
  }
  
  const cine = new Cinema(5, 5);
  cine.reserve(2, 2);
  cine.showCinema();
  cine.reserve(2, 2);
  cine.showCinema();
  cine.reserve(2, 3);
  cine.showCinema();
  