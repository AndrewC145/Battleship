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

  placeShip(ship, xCoord, yCoord, isVertical) {
    // Check if the ship can be placed within the board boundaries
    if (isVertical) {
      if (yCoord + ship.length > this.board[0].length) {
        throw new Error("Ship out of bounds");
      }
    } else {
      if (xCoord + ship.length > this.board.length) {
        throw new Error("Ship out of bounds");
      }
    }

    // Check for overlap with existing ships
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (this.board[xCoord][yCoord + i] !== null) {
          throw new Error("Ship overlaps with another ship");
        }
      } else {
        if (this.board[xCoord + i][yCoord] !== null) {
          throw new Error("Ship overlaps with another ship");
        }
      }
    }

    // Place the ship on the board
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        this.board[xCoord][yCoord + i] = ship;
      } else {
        this.board[xCoord + i][yCoord] = ship;
      }
    }

    // Store the ship in the ships array
    this.ships.push(ship);
  }

  receiveAttack(xCoord, yCoord) {
    if (this.board[xCoord][yCoord] !== null) {
      this.board[xCoord][yCoord].hit();
      return true;
    }
    return false;
  }
}

class Player {
  constructor() {
    this.player = new Gameboard();
    this.enemy = new Gameboard();
  }
}

module.exports = { Ship, Gameboard, Player };
