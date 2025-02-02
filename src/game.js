class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(false);
  }

  hit() {
    this.length--;
  }

  isSunk() {
    return this.length <= 0;
  }
}

class Gameboard {
  constructor() {
    this.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
    this.ships = [];
  }

  placeShip(shipType, row, col, isVertical) {
    // Check if the ship can be placed within the board boundaries
    const ship = new Ship(shipType);

    if (isVertical) {
      if (col + ship.length - 1 > this.board.length) {
        throw new Error("Ship out of bounds");
      }
    } else {
      if (row + ship.length - 1 > this.board.length) {
        throw new Error("Ship out of bounds");
      }
    }

    // Check for overlap with existing ships
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (this.board[row + i][col] !== null) {
          throw new Error("Ship overlaps with another ship");
        }
      } else {
        if (this.board[row][col + i] !== null) {
          throw new Error("Ship overlaps with another ship");
        }
      }
    }

    // Place the ship on the board
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        this.board[row + i][col] = ship;
      } else {
        this.board[row][col + i] = ship;
      }
    }

    // Store the ship in the ships array
    this.ships.push(ship);
  }

  receiveAttack(row, col) {
    if (this.board[row][col] !== null) {
      this.board[row][col].hit();
      return true;
    }
    return false;
  }

  reset() {
    this.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
    this.ships = [];
  }
}

class Player {
  constructor() {
    this.gameBoard = new Gameboard();
    this.enemyBoard = new Gameboard();
  }
}

module.exports = { Ship, Gameboard, Player };
