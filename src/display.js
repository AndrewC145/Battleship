const startGame = document.querySelector('.start-game');

export function initializeUI() {
  startGame.addEventListener('click', () => {
    const titleScreen = document.querySelector('.title-screen');
    titleScreen.classList.add('hidden');
    const chooseShips = document.querySelector('.choose-ships');
    chooseShips.classList.remove('hidden');
  });
}
