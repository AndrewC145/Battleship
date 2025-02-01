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
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[xCoord][yCoord + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[xCoord + i][yCoord] = ship;
      }
    }

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

module.exports = { Ship };
