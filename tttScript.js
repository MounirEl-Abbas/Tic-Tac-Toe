const gameBoard = document.querySelector('.game-container')
window.addEventListener('DOMContentLoaded', setup)

function setup(){
  gameBoard.innerHTML = `
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  `
}

function boardSpotChosen(){
  for (let eachSpot of gameBoard.children){
    console.log(eachSpot)
  }
}
boardSpotChosen()