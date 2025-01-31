const startGame = document.querySelector('.start-game');

export function initializeUI() {
  startGame.addEventListener('click', () => {
    const titleScreen = document.querySelector('.title-screen');
    titleScreen.classList.add('hide');
    const chooseShips = document.querySelector('.choose-ships');
    chooseShips.classList.remove('hide');
    createSelectionBoard();
  });
}

function createSelectionBoard() {
  const selectionBoard = document.querySelector('.selection-grid');

  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.style.width = '100%';
    cell.style.height = '100%';
    cell.style.border = '1px solid black';
    cell.style.cursor = 'pointer';
    selectionBoard.appendChild(cell);
  }
}
