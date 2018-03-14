
let board = [
   "-","-","-",
   "-","-","-",
   "-","-","-"
  ]

  let player1 = 'O';
  let player2 = 'X';
  let player1Next = true;
  let result = false;
  let counter = 0;
  // let score = 0;
  let playerOneScore = 0
  let playerTwoScore = 0


const render = function () {
  for (var i = 0; i < board.length; i++) {
    $('#' + i ).html( board[i])
  }
}

const reset = function () {
  board = [
     "-","-","-",
     "-","-","-",
     "-","-","-"
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
      board[cell] = "X";
      player1Next = false;
    }

    else {
      board[cell] = "O";
      player1Next = true;
    }

    render(board)
    counter ++;
    checkWin(counter);
    playerOneScore ++;


  }


$( ".cell" ).click(function() {
  console.log("clickety");
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
    // let playerOneScoreMessage = `Player 1 score: ${playerOneScore}`


    // playerOneScore ++;
    console.log(playerOneScore);
    $('.winner').html(winMessage);
    // $('.third').html(playerOneScoreMessage);


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
  // playerTwoScore ++
  console.log(playerTwoScore);
  $('.winner').html(winMessage);

  }

  else if (counter === 9){

    let drawMessage = `It's a draw!`
    $('.winner').html(drawMessage);

  }
}

const score = function () {
  result = 0;
  if (result = true) {
    playerOneScore ++
    let playerOneScoreMessage = `Player 1 score: ${playerOneScore}`
    $('.third').html(playerOneScoreMessage);
  }
}


$('#button').on('click', function() {
  reset();
});




});
