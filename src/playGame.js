import { Ship, Gameboard, Player } from "./game";

const startGame = document.querySelector(".start-game");

const player = new Player();
const enemy = new Player();

export function displayGame() {
  startGame.addEventListener("click", () => {
    console.log("Player GameBoard:", player.gameBoard);
    console.log("Enemy GameBoard:", enemy.gameBoard);
    createBoards();
    placeEnemyShips();
    placePlayerShips();
    attack();
  });
}

function placePlayerShips() {
  const playerBoard = document.querySelector(".player-board");
  const selectionGrid = document.querySelector(".selection-grid");

  player.gameBoard.placeShip(5, 0, 0, false);
  player.gameBoard.placeShip(4, 2, 4, true);
  player.gameBoard.placeShip(3, 2, 1, true);
  player.gameBoard.placeShip(3, 5, 6, true);
  player.gameBoard.placeShip(2, 6, 1, false);

  for (let i = 0; i < player.gameBoard.board.length; i++) {
    for (let j = 0; j < player.gameBoard.board[i].length; j++) {
      if (player.gameBoard.board[i][j] instanceof Ship) {
        playerBoard.children[i * 8 + j].style.backgroundColor = "grey";
        selectionGrid.children[i * 8 + j].style.backgroundColor = "grey";
      }
    }
  }
}

function placeEnemyShips() {
  const enemyBoard = document.querySelector(".enemy-board");

  enemy.gameBoard.placeShip(5, 0, 0, false);
  enemy.gameBoard.placeShip(4, 2, 4, true);
  enemy.gameBoard.placeShip(3, 2, 1, true);
  enemy.gameBoard.placeShip(3, 5, 6, true);
  enemy.gameBoard.placeShip(2, 6, 1, false);

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
      cell.className = "cell";
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
      cell.className = "cell";
      enemyBoard.appendChild(cell);
    }
  }
}

function attack() {
  const enemyBoard = document.querySelector(".enemy-board");
  const playerBoard = document.querySelector(".player-board");
  let previousMoves = [];

  enemyBoard.addEventListener("click", (e) => {
    const cell = e.target;

    if (!cell.className.includes("cell")) return;

    const row = Math.floor(
      Array.from(cell.parentElement.children).indexOf(cell) / 8,
    );
    const col = Array.from(cell.parentElement.children).indexOf(cell) % 8;

    const isHit = enemy.gameBoard.receiveAttack(row, col);

    let playerRow = Math.floor(Math.random() * 8);
    let playerCol = Math.floor(Math.random() * 8);
    const isPlayerHit = player.gameBoard.receiveAttack(playerRow, playerCol);
    let playerCell = playerBoard.children[playerRow * 8 + playerCol];

    while (
      previousMoves.some(
        (move) => move[0] === playerRow && move[1] === playerCol,
      )
    ) {
      playerRow = Math.floor(Math.random() * 8);
      playerCol = Math.floor(Math.random() * 8);
    }

    let computerMoves = [playerRow, playerCol];
    previousMoves.push(computerMoves);
    console.log(previousMoves);

    applyCellStyles(cell, isHit);
    applyCellStyles(playerCell, isPlayerHit);
  });
}

function applyCellStyles(cell, isHit) {
  if (isHit) {
    cell.style.backgroundColor = "rgb(173, 106, 106)";
    cell.style.backgroundImage =
      "url('../dist/images/x-symbol-svgrepo-com.svg')";
  } else {
    cell.style.backgroundColor = "rgb(102, 171, 189)";
    cell.style.backgroundImage = "url('../dist/images/circle-svgrepo-com.svg')";
  }
  cell.style.backgroundSize = "100%";
  cell.style.backgroundRepeat = "no-repeat";
  cell.style.pointerEvents = "none";
}
