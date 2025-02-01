import { Ship, Gameboard, Player } from "./game";

const startGame = document.querySelector(".start-game");
const playGame = document.querySelector(".play-game");

const gameBoard = new Gameboard();
const player = new Player();
const enemy = new Player();

export function displayGame() {
  startGame.addEventListener("click", () => {
    console.log("Player GameBoard:", player.gameBoard);
    console.log("Enemy GameBoard:", enemy.gameBoard);
    createBoards();
    placeShips();
    attack();
  });
}

function placeShips() {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  player.gameBoard.placeShip(5, 0, 0, false);
  player.gameBoard.placeShip(4, 1, 0, false);
  player.gameBoard.placeShip(3, 2, 0, false);
  player.gameBoard.placeShip(3, 3, 0, false);
  player.gameBoard.placeShip(2, 4, 0, false);

  enemy.gameBoard.placeShip(5, 0, 0, false);
  enemy.gameBoard.placeShip(4, 1, 0, false);
  enemy.gameBoard.placeShip(3, 2, 0, false);
  enemy.gameBoard.placeShip(3, 3, 0, false);
  enemy.gameBoard.placeShip(2, 4, 0, false);

  for (let i = 0; i < player.gameBoard.board.length; i++) {
    for (let j = 0; j < player.gameBoard.board[i].length; j++) {
      if (player.gameBoard.board[i][j] instanceof Ship) {
        playerBoard.children[i * 8 + j].style.backgroundColor = "gray";
      }
    }
  }

  for (let i = 0; i < enemy.gameBoard.board.length; i++) {
    for (let j = 0; j < enemy.gameBoard.board[i].length; j++) {
      if (enemy.gameBoard.board[i][j] instanceof Ship) {
        enemyBoard.children[i * 8 + j].style.backgroundColor = "transparent";
      }
    }
  }
}

function createBoards() {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  for (let i = 0; i < player.gameBoard.board.length; i++) {
    for (let j = 0; j < player.gameBoard.board[i].length; j++) {
      const cell = document.createElement("div");
      cell.style.width = "100%";
      cell.style.height = "100%";
      cell.style.border = "1px solid black";
      cell.style.cursor = "pointer";
      playerBoard.appendChild(cell);
    }
  }

  for (let i = 0; i < enemy.gameBoard.board.length; i++) {
    for (let j = 0; j < enemy.gameBoard.board[i].length; j++) {
      const cell = document.createElement("div");
      cell.style.width = "100%";
      cell.style.height = "100%";
      cell.style.border = "1px solid black";
      cell.style.cursor = "pointer";
      enemyBoard.appendChild(cell);
    }
  }
}

function attack() {
  const enemyBoard = document.querySelector(".enemy-board");

  enemyBoard.addEventListener("click", (e) => {
    const cell = e.target;
    const row = Math.floor(
      Array.from(cell.parentElement.children).indexOf(cell) / 8,
    );
    const col = Array.from(cell.parentElement.children).indexOf(cell) % 8;

    const isHit = player.gameBoard.receiveAttack(row, col);

    if (isHit) {
      cell.style.backgroundColor = "lightred";
    } else {
      cell.style.backgroundColor = "lightblue";
    }
  });
}
