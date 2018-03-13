// let board = [
//  "-","-","-",
//  "-","-","-",
//  "-","-","-"
// ]
//
// board[2] = "O"
// board[5] = "X"
//
// if board[0] === board [1] ===  board [2]

// console.log("connected");
//
// let origBoard;
// let player1 = 'O';
// let player2 = 'X';
// let winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]
// ]
//
// const cells = document.querySelectorAll('.cell');
//
//
// const startGame = function() {
//   document.querySelector(".endgame").style.display = "none";
//   origBoard = Array.from(Array(9).keys());
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].innerText = '';
//     cells[i].style.removeProperty('background-color');
//     cells[i].addEventListener('click', turnClick, false);
//   }
// }
//
// const turnClick = function(event) {
//   // console.log(event)
//   // console.log(event.target.id);
//   // if (typeof origBoard[event.target.id] == 'number') {
//   turn(event.target.id, player1);
//   // if (!checkTie()) turn(bestSpot()) player2;
// // }
// }
//
// const turn = function (eventId, player) {
//   origBoard[eventId] = player;
//   document.getElementById(eventId).innerText = player;
//   let gameWon = checkWin(origBoard, player);
//   if (gameWon)gameOver(gameWon);
// }
//
// const checkWin = function (board, player) {
//   let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
//   let gameWon = null;
//   for (let [index, win] of winCombos.entries()) {
//     if (win.every(elem => plays.indexOf(elem) > -1)) {
//       gameWon = {index: index, player: player};
//       break;
//     }
//   }
//   return gameWon;
// };
//
// const gameOver = function(gameWon) {
//   for (let index of winCombos[gameWon.index]) {
//   document.getElementById(index).style.backgroundColor =
//   gameWon.player == player1 ? "blue" : "red";
// }
//   // for (var i = 0; i < cells.length; i++) {
//   //   cells[i].removeEventListener('click', turnClick, false);
//
//   }
// }
//
//
//
// $(document).ready( function() {
//   console.log("i am ready");
//   startGame();
//
//   $('table').on('click', turnClick)
//
// })
