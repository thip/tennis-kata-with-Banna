function result(firstPlayer, secondPlayer ){
  if (firstPlayer.points === 40 && secondPlayer.points === 40 ){
    return 'deuce';
  }
  
  if (firstPlayer.points === 40){
    return 'Player A is the winner';
  }

  if (secondPlayer.points === 40){
    return 'Player B is the winner';
  }

}

function testWhenPlayersBothHaveForty(){
  var firstPlayer = { points: 40 };
  var secondPlayer = { points: 40 };

  console.log('When both players have 40, the result of the match is ' + result(firstPlayer, secondPlayer));
}

function testWhenFirstPlayerWins(){
  var firstPlayer = { points: 40 };
  var secondPlayer = { points: 0 }; 

  console.log('When just Player A has 40, the result of the match is ' + result(firstPlayer, secondPlayer));
}

function testWhenSecondPlayerWins(){
  var firstPlayer = { points: 0 };
  var secondPlayer = { points: 40 }; 

  console.log('When just Player B has 40, the result of the match is ' + result(firstPlayer, secondPlayer));
}


function runAllTests(){
  testWhenPlayersBothHaveForty();
  testWhenFirstPlayerWins();
  testWhenSecondPlayerWins();
}

runAllTests();
