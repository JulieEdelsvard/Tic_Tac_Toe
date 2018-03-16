
let board = [
   "","","",
   "","","",
   "","",""
  ]

  let player1 = `<img src="https://image.flaticon.com/icons/svg/24/24883.svg">`;
  let player2 = `<img src="https://image.flaticon.com/icons/svg/24/24874.svg">`;
  let player1Next = true;
  let result = false;
  let counter = 0;
  let playerOneScore = 0
  let playerTwoScore = 0


const render = function () {
  for (var i = 0; i < board.length; i++) {
    $('#' + i ).html( board[i] )
  }
}

const reset = function () {
  board = [
     "","","",
     "","","",
     "","",""
    ]
  render();
  result = false;
  $('.winner').html("")
  counter = 0;
}


$( document ).ready(function() {
  result = false;


  const playTurn = function (cell) {

    if (player1Next) {
      board[cell] = `<img src="https://image.flaticon.com/icons/svg/24/24883.svg">`;
      player1Next = false;
    }

    else {
      board[cell] = `<img src="https://image.flaticon.com/icons/svg/24/24874.svg">`;
      player1Next = true;
    }

    render(board)
    counter ++;
    checkWin(counter);

  }


$( ".cell" ).click(function() {
  let arrayPosition = parseInt($(this).attr('id'));
  if (!result) { playTurn(arrayPosition) }

});

const checkWin = function (counter) {

  if ( (board[0] === player1 && board[1] ===  player1 && board[2] === player1 )
    || (board[3] === player1 && board[4] ===  player1 && board[5] === player1 )
    || (board[6] === player1 && board[7] ===  player1 && board[8] === player1 )
    || (board[0] === player1 && board[4] ===  player1 && board[8] === player1 )
    || (board[2] === player1 && board[4] ===  player1 && board[6] === player1 )
    || (board[0] === player1 && board[3] ===  player1 && board[6] === player1 )
    || (board[1] === player1 && board[4] ===  player1 && board[7] === player1 )
    || (board[2] === player1 && board[5] ===  player1 && board[8] === player1 )) {
    result = true;
    let winMessage = `Congratulations, ${player1} you won!`
    $('.winner').html(winMessage);

    playerOneScore ++;
    let playerOneScoreMessage = `Player ${player1} score: ${playerOneScore}`
    $('#playerOneScore').html(playerOneScoreMessage);


  } else if (
     (board[0] === player2 && board[1] ===  player2 && board[2] === player2 )
  || (board[3] === player2 && board[4] ===  player2 && board[5] === player2 )
  || (board[6] === player2 && board[7] ===  player2 && board[8] === player2 )
  || (board[0] === player2 && board[4] ===  player2 && board[8] === player2 )
  || (board[2] === player2 && board[4] ===  player2 && board[6] === player2 )
  || (board[0] === player2 && board[3] ===  player2 && board[6] === player2 )
  || (board[1] === player2 && board[4] ===  player2 && board[7] === player2 )
  || (board[2] === player2 && board[5] ===  player2 && board[8] === player2 )) {
  result = true;
  let winMessage = `Congratulations, ${player2} you won!`
  $('.winner').html(winMessage);

  playerTwoScore ++;
  let playerTwoScoreMessage = `Player ${player2} score: ${playerTwoScore}`
  $('#playerTwoScore').html(playerTwoScoreMessage);

  }

  else if (counter === 9){

    let drawMessage = `It's a draw!`
    $('.winner').html(drawMessage);

  }
}

$('#button').on('click', function() {
  reset();
});


});
