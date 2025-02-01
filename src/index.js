import { initializeUI } from "./display";
import { displayGame } from "./playGame";

document.addEventListener("DOMContentLoaded", () => {
  initializeUI();
  displayGame();
});
