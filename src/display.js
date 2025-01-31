const startGame = document.querySelector('.start-game');
const playGame = document.querySelector(".play-game")

export function initializeUI() {
  startGame.addEventListener('click', () => {
    const titleScreen = document.querySelector('.title-screen');
    titleScreen.classList.add('hide');
    const chooseShips = document.querySelector('.choose-ships');
    chooseShips.classList.remove('hide');
    createSelectionBoard();
  });

  playGame.addEventListener("click", () => {
    const chooseShips = document.querySelector('.choose-ships');
    chooseShips.classList.add('hide');
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');
  });
}

function createSelectionBoard() {
  const selectionBoard = document.querySelector('.selection-grid');
  const playerBoard = document.querySelector('.player-board');
  const enemyBoard = document.querySelector('.enemy-board');

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.style.width = '100%';
    cell.style.height = '100%';
    cell.style.border = '1px solid black';
    cell.style.cursor = 'pointer';
    selectionBoard.appendChild(cell);
    playerBoard.appendChild(cell.cloneNode());
    enemyBoard.appendChild(cell.cloneNode());
  }
}
