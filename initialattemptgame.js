/*

const player 1 score
const player 2 score 

addEventListener('click') =>
-odd/even different colors
-change id to player number

if four id's of the same kind in a row, game ends

message  "Player [] has won the game"

button appear - click to play again
reset colors, ids, and player scores

*/

// declare variables for score and player names for both players
let playerOneScore;
let playerTwoScore;
let playerOneName;
let playerTwoName;
let winner;
let loser;
let clickCounter = 0;

// ask players what their name is and store in the name variables
playerOneName = prompt("Player One, what is your name?");
playerTwoName = prompt("Player Two, what is your name?");

alert(`${playerOneName}, you're up!`);

// upon click of a tile, the color will change to player's color and change class to clicked and ID to player
// const space = document.getElementsByClassName(space);
$("button#space1").click(function () {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter % 2 == 0) {
    $("button#space1").addClass("clickedPlayerTwo");
  } else {
    $("button#space1").addClass("clickedPlayerOne");
  }
});

$("button#space2").click(function () {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter % 2 == 0) {
    $("button#space2").addClass("clickedPlayerTwo");
  } else {
    $("button#space2").addClass("clickedPlayerOne");
  }
});

$("button#space3").click(function () {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter % 2 == 0) {
    $("button#space3").addClass("clickedPlayerTwo");
  } else {
    $("button#space3").addClass("clickedPlayerOne");
  }
});

$("button#space4").click(function () {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter % 2 == 0) {
    $("button#space4").addClass("clickedPlayerTwo");
  } else {
    $("button#space4").addClass("clickedPlayerOne");
  }
});
/*

for (let i = 0; i < 25; i++) {
    $("button#space[i]").click(function () {
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("button#space[i]").addClass("clickedPlayerTwo");
    } else {
      $("button#space[i]").addClass("clickedPlayerOne");
    }
  });
}
  */

/*$("button#space2").click(function () {
  $("button#space2").addClass("clicked");
});
$("button#space3").click(function () {
  $("button#space3").addClass("clicked");
});
$("button#space4").click(function () {
  $("button#space4").addClass("clicked");
});

clickCounter.forEach(element => {
    clickCounter++;
});

if (clickCounter % 2 == 0 ){

} else {

}
*/

//document.getElementsByClassName("space").addEventListener("click", idChange);

// check for the same IDs

//if () {

//}

/* prompt box tells players who won
winner = '';
loser = '';

prompt(`${winner} has won the game! Better luck next time, ${loser}`)
*/
