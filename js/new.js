


  let board = [
   "-","-","-",
   "-","-","-",
   "-","-","-"
  ]

  let player1 = 'O';
  let player2 = 'X';

  let player1Next = true;


const render = function (board) {
  for (var i = 0; i < board.length; i++) {
    $('#' + i ).html( board[i])
  }

}

  const playTurn = function (cell) {

    if (player1Next) {
      board[cell] = "X";
      player1Next = false;
    }

    else {
      board[cell] = "O";
      player1Next = true;
    }
    console.log(board);
    render(board)
  }



$( document ).ready(function() {



$( ".cell" ).click(function() {
  // console.log($(this).attr('id'));
  let arrayPosition = parseInt($(this).attr('id'));
  // console.log(arrayPosition);
  // console.log(board);
  playTurn(arrayPosition);
});

const checkWin = function () {
  if ( (board[0] === player1 && board[1] ===  player1 && board[2] === player1 )
    || (board[3] === player1 && board[4] ===  player1 && board[5] === player1 )
    || (board[6] === player1 && board[7] ===  player1 && board[8] === player1 )
    || (board[0] === player1 && board[4] ===  player1 && board[8] === player1 )
    || (board[2] === player1 && board[4] ===  player1 && board[6] === player1 )
    || (board[0] === player1 && board[3] ===  player1 && board[6] === player1 )
    || (board[1] === player1 && board[4] ===  player1 && board[7] === player1 )
    || (board[2] === player1 && board[5] ===  player1 && board[8] === player1 )) {

       // gameWon = true;

  }
}





});
