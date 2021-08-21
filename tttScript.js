const gameBoard = document.querySelector('.game-container')
const player1ScoreEl = document.getElementById('player1Score')
const player2ScoreEl = document.getElementById('player2Score')


window.addEventListener('DOMContentLoaded', setupNewGame)

let playerOne = {marker: "x", score: 0, turn: true, winner: false}
let playerTwo = {marker: "o", score: 0, turn: false, winner: false}  


function setupNewGame(){
  //Global Variables
  playerOne.turn = true       //Reset Turns
  playerOne.winner = false    //Reset Winner
  playerTwo.turn = false
  playerTwo.winner = false
  gameArray = [
  '', '', '',
  '', '', '',
  '', '', ''
]
  gameBoard.innerHTML = `
  <div id="0"></div>
  <div id="1"></div>
  <div id="2"></div>
  <div id="3"></div>
  <div id="4"></div>
  <div id="5"></div>
  <div id="6"></div>
  <div id="7"></div>
  <div id="8"></div>
  `
  addListeners()
}

function addListeners() {
  for (let eachSpot of gameBoard.children){
    eachSpot.addEventListener('click', boardSpotPicked)
  }
}

function getPlayerTurn(){
  if (playerOne.turn){      //If player one's turn
    playerOne.turn = false  //Changes turns for next time function is called
    playerTwo.turn = true
    return playerOne        //But returns playerOne
  } else {
    playerOne.turn = true
    playerTwo.turn = false
    return playerTwo
  } 
}


function boardSpotPicked(e){
  if (!playerOne.winner && !playerTwo.winner){          //If No winners
    let boardQuadrantChosen = e.target            
    if(boardQuadrantChosen.textContent == ''){          //If Quadrant not already picked
    let player = getPlayerTurn()                        //Get {object} of Player currently playing
      boardQuadrantChosen.textContent = player.marker   //Add Player's marker (X/O)
      gameArray[boardQuadrantChosen.id] = player.marker //Track change in gameArray
      checkWin(player)
    }
  }
}


function checkWin(player) {
  switch ('xxx') {
    case (gameArray[0] + gameArray[1] + gameArray[2]):  //Row 1
    case (gameArray[3] + gameArray[4] + gameArray[5]):  //Row 2
    case (gameArray[6] + gameArray[7] + gameArray[8]):  //Row 3
    case (gameArray[0] + gameArray[3] + gameArray[6]):  //Column 1
    case (gameArray[1] + gameArray[4] + gameArray[7]):  //Column 2
    case (gameArray[2] + gameArray[5] + gameArray[8]):  //Column 3
    case (gameArray[0] + gameArray[4] + gameArray[8]):  //Diagnol \
    case (gameArray[2] + gameArray[4] + gameArray[6]):  //Diagnol /
      hasWon(player)
      break;
    default:
      break;
  }
  switch ('ooo') {
    case (gameArray[0] + gameArray[1] + gameArray[2]):  //Row 1
    case (gameArray[3] + gameArray[4] + gameArray[5]):  //Row 2
    case (gameArray[6] + gameArray[7] + gameArray[8]):  //Row 3
    case (gameArray[0] + gameArray[3] + gameArray[6]):  //Column 1
    case (gameArray[1] + gameArray[4] + gameArray[7]):  //Column 2
    case (gameArray[2] + gameArray[5] + gameArray[8]):  //Column 3
    case (gameArray[0] + gameArray[4] + gameArray[8]):  //Diagnol \
    case (gameArray[2] + gameArray[4] + gameArray[6]):  //Diagnol /
      hasWon(player)
      break;
    default:
      break;
  }
}

function hasWon(player){
  player.winner = true
  player.score++
  switch (player.marker) {    //See the winner's marker
    case 'x':                 //If winner's marker == 'x', player 1 is the winner
    player1ScoreEl.textContent = player.score
      setTimeout(function() {
    let confirmed = confirm("Player 1 Wins")
    if(confirmed){
      setupNewGame()
    }}, 100)
      break;
  
    case 'o':                 //If winner's marker == 'o', player 2 is the winner
    player2ScoreEl.textContent = player.score
      setTimeout(function() {
    let confirmed = confirm("Player 2 Wins")
    if(confirmed){
      setupNewGame()
    }}, 100)
      break;
  }

}