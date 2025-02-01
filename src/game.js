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

module.exports = { Ship };
