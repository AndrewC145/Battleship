/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\nconst startGame = document.querySelector(\".start-game\");\r\nconst playGame = document.querySelector(\".play-game\");\r\n\r\nfunction initializeUI() {\r\n  startGame.addEventListener(\"click\", () => {\r\n    const titleScreen = document.querySelector(\".title-screen\");\r\n    titleScreen.classList.add(\"hide\");\r\n    const chooseShips = document.querySelector(\".choose-ships\");\r\n    chooseShips.classList.remove(\"hide\");\r\n    createSelectionBoard();\r\n  });\r\n\r\n  playGame.addEventListener(\"click\", () => {\r\n    const chooseShips = document.querySelector(\".choose-ships\");\r\n    chooseShips.classList.add(\"hide\");\r\n    const gameScreen = document.querySelector(\".game-screen\");\r\n    gameScreen.classList.remove(\"hide\");\r\n  });\r\n}\r\n\r\nfunction createSelectionBoard() {\r\n  const selectionBoard = document.querySelector(\".selection-grid\");\r\n\r\n  for (let i = 0; i < 64; i++) {\r\n    const cell = document.createElement(\"div\");\r\n    cell.style.width = \"100%\";\r\n    cell.style.height = \"100%\";\r\n    cell.style.border = \"1px solid black\";\r\n    cell.style.cursor = \"pointer\";\r\n    selectionBoard.appendChild(cell);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = Array(length).fill(false);\r\n  }\r\n\r\n  hit() {\r\n    this.length--;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.length <= 0;\r\n  }\r\n}\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = Array(8)\r\n      .fill(null)\r\n      .map(() => Array(8).fill(null));\r\n    this.ships = [];\r\n  }\r\n\r\n  placeShip(shipType, row, col, isVertical) {\r\n    // Check if the ship can be placed within the board boundaries\r\n    const ship = new Ship(shipType);\r\n\r\n    if (isVertical) {\r\n      if (col + ship.length > this.board[0].length) {\r\n        throw new Error(\"Ship out of bounds\");\r\n      }\r\n    } else {\r\n      if (row + ship.length > this.board.length) {\r\n        throw new Error(\"Ship out of bounds\");\r\n      }\r\n    }\r\n\r\n    // Check for overlap with existing ships\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (isVertical) {\r\n        if (this.board[row + i][col] !== null) {\r\n          throw new Error(\"Ship overlaps with another ship\");\r\n        }\r\n      } else {\r\n        if (this.board[row][col + i] !== null) {\r\n          throw new Error(\"Ship overlaps with another ship\");\r\n        }\r\n      }\r\n    }\r\n\r\n    // Place the ship on the board\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (isVertical) {\r\n        this.board[row + i][col] = ship;\r\n      } else {\r\n        this.board[row][col + i] = ship;\r\n      }\r\n    }\r\n\r\n    // Store the ship in the ships array\r\n    this.ships.push(ship);\r\n  }\r\n\r\n  receiveAttack(row, col) {\r\n    if (this.board[row][col] !== null) {\r\n      this.board[row][col].hit();\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor() {\r\n    this.gameBoard = new Gameboard();\r\n    this.enemyBoard = new Gameboard();\r\n  }\r\n}\r\n\r\nmodule.exports = { Ship, Gameboard, Player };\r\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playGame */ \"./src/playGame.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_display__WEBPACK_IMPORTED_MODULE_0__.initializeUI)();\r\n  (0,_playGame__WEBPACK_IMPORTED_MODULE_1__.displayGame)();\r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/playGame.js":
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayGame: () => (/* binding */ displayGame)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst startGame = document.querySelector(\".start-game\");\r\nconst playGame = document.querySelector(\".play-game\");\r\n\r\nconst gameBoard = new _game__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\r\nconst player = new _game__WEBPACK_IMPORTED_MODULE_0__.Player();\r\nconst enemy = new _game__WEBPACK_IMPORTED_MODULE_0__.Player();\r\n\r\nfunction displayGame() {\r\n  startGame.addEventListener(\"click\", () => {\r\n    console.log(\"Player GameBoard:\", player.gameBoard);\r\n    console.log(\"Enemy GameBoard:\", enemy.gameBoard);\r\n    createBoards();\r\n    placeShips();\r\n    attack();\r\n  });\r\n}\r\n\r\nfunction placeShips() {\r\n  const playerBoard = document.querySelector(\".player-board\");\r\n  const enemyBoard = document.querySelector(\".enemy-board\");\r\n\r\n  player.gameBoard.placeShip(5, 0, 0, false);\r\n  player.gameBoard.placeShip(4, 1, 0, false);\r\n  player.gameBoard.placeShip(3, 2, 0, false);\r\n  player.gameBoard.placeShip(3, 3, 0, false);\r\n  player.gameBoard.placeShip(2, 4, 0, false);\r\n\r\n  enemy.gameBoard.placeShip(5, 0, 0, false);\r\n  enemy.gameBoard.placeShip(4, 1, 0, false);\r\n  enemy.gameBoard.placeShip(3, 2, 0, false);\r\n  enemy.gameBoard.placeShip(3, 3, 0, false);\r\n  enemy.gameBoard.placeShip(2, 4, 0, false);\r\n\r\n  for (let i = 0; i < player.gameBoard.board.length; i++) {\r\n    for (let j = 0; j < player.gameBoard.board[i].length; j++) {\r\n      if (player.gameBoard.board[i][j] instanceof _game__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n        playerBoard.children[i * 8 + j].style.backgroundColor = \"gray\";\r\n      }\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < enemy.gameBoard.board.length; i++) {\r\n    for (let j = 0; j < enemy.gameBoard.board[i].length; j++) {\r\n      if (enemy.gameBoard.board[i][j] instanceof _game__WEBPACK_IMPORTED_MODULE_0__.Ship) {\r\n        enemyBoard.children[i * 8 + j].style.backgroundColor = \"transparent\";\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction createBoards() {\r\n  const playerBoard = document.querySelector(\".player-board\");\r\n  const enemyBoard = document.querySelector(\".enemy-board\");\r\n\r\n  for (let i = 0; i < player.gameBoard.board.length; i++) {\r\n    for (let j = 0; j < player.gameBoard.board[i].length; j++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.style.width = \"100%\";\r\n      cell.style.height = \"100%\";\r\n      cell.style.border = \"1px solid black\";\r\n      cell.style.cursor = \"pointer\";\r\n      cell.className = \"cell\";\r\n      playerBoard.appendChild(cell);\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < enemy.gameBoard.board.length; i++) {\r\n    for (let j = 0; j < enemy.gameBoard.board[i].length; j++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.style.width = \"100%\";\r\n      cell.style.height = \"100%\";\r\n      cell.style.border = \"1px solid black\";\r\n      cell.style.cursor = \"pointer\";\r\n      cell.className = \"cell\";\r\n      enemyBoard.appendChild(cell);\r\n    }\r\n  }\r\n}\r\n\r\nfunction attack() {\r\n  const enemyBoard = document.querySelector(\".enemy-board\");\r\n  const playerBoard = document.querySelector(\".player-board\");\r\n  let previousMoves = [];\r\n\r\n  enemyBoard.addEventListener(\"click\", (e) => {\r\n    const cell = e.target;\r\n\r\n    if (!cell.className.includes(\"cell\")) return;\r\n\r\n    const row = Math.floor(\r\n      Array.from(cell.parentElement.children).indexOf(cell) / 8,\r\n    );\r\n    const col = Array.from(cell.parentElement.children).indexOf(cell) % 8;\r\n\r\n    const isHit = enemy.gameBoard.receiveAttack(row, col);\r\n\r\n    let playerRow = Math.floor(Math.random() * 8);\r\n    let playerCol = Math.floor(Math.random() * 8);\r\n    const isPlayerHit = player.gameBoard.receiveAttack(playerRow, playerCol);\r\n    let playerCell = playerBoard.children[playerRow * 8 + playerCol];\r\n\r\n    while (\r\n      previousMoves.some(\r\n        (move) => move[0] === playerRow && move[1] === playerCol,\r\n      )\r\n    ) {\r\n      console.log(\"Duplicate move\");\r\n      playerRow = Math.floor(Math.random() * 8);\r\n      playerCol = Math.floor(Math.random() * 8);\r\n    }\r\n\r\n    let computerMoves = [playerRow, playerCol];\r\n    previousMoves.push(computerMoves);\r\n    console.log(previousMoves);\r\n\r\n    applyCellStyles(cell, isHit);\r\n    applyCellStyles(playerCell, isPlayerHit);\r\n  });\r\n}\r\n\r\nfunction applyCellStyles(cell, isHit) {\r\n  if (isHit) {\r\n    cell.style.backgroundColor = \"rgb(173, 106, 106)\";\r\n    cell.style.backgroundImage =\r\n      \"url('../dist/images/x-symbol-svgrepo-com.svg')\";\r\n  } else {\r\n    cell.style.backgroundColor = \"rgb(102, 171, 189)\";\r\n    cell.style.backgroundImage = \"url('../dist/images/circle-svgrepo-com.svg')\";\r\n  }\r\n  cell.style.backgroundSize = \"100%\";\r\n  cell.style.backgroundRepeat = \"no-repeat\";\r\n  cell.style.pointerEvents = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/playGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;