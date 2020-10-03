// create the class for the overall game
class Game {
  constructor(winner, loser) {
    this.winner = winner;
    this.loser = loser;
  }
  //method to add names to screen

  // methods to add divs to make tiles appear when a player clicks on a screen
  addDivOne() {
    let spanOneChildCount = $("#one div").length;
    if (spanOneChildCount === 5) {
      alert("That column is full! Try another one.");
      return;
    }
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("span#one").append('<div class="clickedPlayerTwo"></div>');
    } else {
      $("span#one").append('<div class="clickedPlayerOne"></div>');
    }
  }
  addDivTwo() {
    let spanTwoChildCount = $("#two div").length;
    if (spanTwoChildCount === 5) {
      alert("That column is full! Try another one.");
      return;
    }
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("span#two").append('<div class="clickedPlayerTwo"></div>');
    } else {
      $("span#two").append('<div class="clickedPlayerOne"></div>');
    }
  }
  addDivThree() {
    let spanThreeChildCount = $("#three div").length;
    if (spanThreeChildCount === 5) {
      alert("That column is full! Try another one.");
      return;
    }
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("span#three").append('<div class="clickedPlayerTwo"></div>');
    } else {
      $("span#three").append('<div class="clickedPlayerOne"></div>');
    }
  }
  addDivFour() {
    let spanFourChildCount = $("#four div").length;
    if (spanFourChildCount === 5) {
      alert("That column is full! Try another one.");
      return;
    }
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("span#four").append('<div class="clickedPlayerTwo"></div>');
    } else {
      $("span#four").append('<div class="clickedPlayerOne"></div>');
    }
  }
  addDivFive() {
    let spanFiveChildCount = $("#five div").length;
    if (spanFiveChildCount === 5) {
      alert("That column is full! Try another one.");
      return;
    }
    clickCounter += 1;
    console.log(clickCounter);
    if (clickCounter % 2 == 0) {
      $("span#five").append('<div class="clickedPlayerTwo"></div>');
    } else {
      $("span#five").append('<div class="clickedPlayerOne"></div>');
    }
  }
  columnEval() {
    let arrSpanOne = $("span#one div").toArray();
    let arrSpanTwo = $("span#two div").toArray();
    let arrSpanThree = $("span#three div").toArray();
    let arrSpanFour = $("span#four div").toArray();
    let arrSpanFive = $("span#five div").toArray();
    let spanOneChildCount = $("#one div").length;
    let spanTwoChildCount = $("#two div").length;
    let spanThreeChildCount = $("#three div").length;
    let spanFourChildCount = $("#four div").length;
    let spanFiveChildCount = $("#five div").length;

    if (spanOneChildCount === 4) {
      if (
        arrSpanOne[1].className === arrSpanOne[2].className &&
        arrSpanOne[2].className === arrSpanOne[3].className &&
        arrSpanOne[0].className === arrSpanOne[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    if (spanOneChildCount === 5) {
      if (
        arrSpanOne[1].className === arrSpanOne[2].className &&
        arrSpanOne[2].className === arrSpanOne[3].className &&
        arrSpanOne[4].className === arrSpanOne[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (spanTwoChildCount === 4) {
      if (
        arrSpanTwo[1].className === arrSpanTwo[2].className &&
        arrSpanTwo[2].className === arrSpanTwo[3].className &&
        arrSpanTwo[0].className === arrSpanTwo[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    if (spanTwoChildCount === 5) {
      if (
        arrSpanTwo[1].className === arrSpanTwo[2].className &&
        arrSpanTwo[2].className === arrSpanTwo[3].className &&
        arrSpanTwo[4].className === arrSpanTwo[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (spanThreeChildCount === 4) {
      if (
        arrSpanThree[1].className === arrSpanThree[2].className &&
        arrSpanThree[2].className === arrSpanThree[3].className &&
        arrSpanThree[0].className === arrSpanThree[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    if (spanThreeChildCount === 5) {
      if (
        arrSpanThree[1].className === arrSpanThree[2].className &&
        arrSpanThree[2].className === arrSpanThree[3].className &&
        arrSpanThree[4].className === arrSpanThree[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (spanFourChildCount === 4) {
      if (
        arrSpanFour[1].className === arrSpanFour[2].className &&
        arrSpanFour[2].className === arrSpanFour[3].className &&
        arrSpanFour[0].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    if (spanFourChildCount === 5) {
      if (
        arrSpanFour[1].className === arrSpanFour[2].className &&
        arrSpanFour[2].className === arrSpanFour[3].className &&
        arrSpanFour[4].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (spanFiveChildCount === 4) {
      if (
        arrSpanFive[1].className === arrSpanFive[2].className &&
        arrSpanFive[2].className === arrSpanFive[3].className &&
        arrSpanFive[0].className === arrSpanFive[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    if (spanFiveChildCount === 5) {
      if (
        arrSpanFive[1].className === arrSpanFive[2].className &&
        arrSpanFive[2].className === arrSpanFive[3].className &&
        arrSpanFive[4].className === arrSpanFive[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
  }

  rowEval() {
    let arrSpanOne = $("span#one div").toArray();
    let arrSpanTwo = $("span#two div").toArray();
    let arrSpanThree = $("span#three div").toArray();
    let arrSpanFour = $("span#four div").toArray();
    let arrSpanFive = $("span#five div").toArray();
    let spanOneChildCount = $("#one div").length;
    let spanTwoChildCount = $("#two div").length;
    let spanThreeChildCount = $("#three div").length;
    let spanFourChildCount = $("#four div").length;
    let spanFiveChildCount = $("#five div").length;

    // row one
    if (
      spanOneChildCount >= 1 &&
      spanTwoChildCount >= 1 &&
      spanThreeChildCount >= 1 &&
      spanFourChildCount >= 1
    ) {
      if (
        arrSpanOne[0].className === arrSpanTwo[0].className &&
        arrSpanOne[0].className === arrSpanThree[0].className &&
        arrSpanOne[0].className === arrSpanFour[0].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (
      spanFiveChildCount >= 1 &&
      spanTwoChildCount >= 1 &&
      spanThreeChildCount >= 1 &&
      spanFourChildCount >= 1
    ) {
      if (
        arrSpanFive[0].className === arrSpanTwo[0].className &&
        arrSpanFive[0].className === arrSpanThree[0].className &&
        arrSpanFive[0].className === arrSpanFour[0].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // row two
    if (
      spanOneChildCount >= 2 &&
      spanTwoChildCount >= 2 &&
      spanThreeChildCount >= 2 &&
      spanFourChildCount >= 2
    ) {
      if (
        arrSpanOne[1].className === arrSpanTwo[1].className &&
        arrSpanOne[1].className === arrSpanThree[1].className &&
        arrSpanOne[1].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (
      spanFiveChildCount >= 2 &&
      spanTwoChildCount >= 2 &&
      spanThreeChildCount >= 2 &&
      spanFourChildCount >= 2
    ) {
      if (
        arrSpanFive[1].className === arrSpanTwo[1].className &&
        arrSpanFive[1].className === arrSpanThree[1].className &&
        arrSpanFive[1].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // row three
    if (
      spanOneChildCount >= 3 &&
      spanTwoChildCount >= 3 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 3
    ) {
      if (
        arrSpanOne[2].className === arrSpanTwo[2].className &&
        arrSpanOne[2].className === arrSpanThree[2].className &&
        arrSpanOne[2].className === arrSpanFour[2].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (
      spanFiveChildCount >= 3 &&
      spanTwoChildCount >= 3 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 3
    ) {
      if (
        arrSpanFive[2].className === arrSpanTwo[2].className &&
        arrSpanFive[2].className === arrSpanThree[2].className &&
        arrSpanFive[2].className === arrSpanFour[2].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // row four
    if (
      spanOneChildCount >= 4 &&
      spanTwoChildCount >= 4 &&
      spanThreeChildCount >= 4 &&
      spanFourChildCount >= 4
    ) {
      if (
        arrSpanOne[3].className === arrSpanTwo[3].className &&
        arrSpanOne[3].className === arrSpanThree[3].className &&
        arrSpanOne[3].className === arrSpanFour[3].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (
      spanFiveChildCount >= 4 &&
      spanTwoChildCount >= 4 &&
      spanThreeChildCount >= 4 &&
      spanFourChildCount >= 4
    ) {
      if (
        arrSpanFive[3].className === arrSpanTwo[3].className &&
        arrSpanFive[3].className === arrSpanThree[3].className &&
        arrSpanFive[3].className === arrSpanFour[3].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // row five
    if (
      spanOneChildCount >= 5 &&
      spanTwoChildCount >= 5 &&
      spanThreeChildCount >= 5 &&
      spanFourChildCount >= 5
    ) {
      if (
        arrSpanOne[4].className === arrSpanTwo[4].className &&
        arrSpanOne[4].className === arrSpanThree[4].className &&
        arrSpanOne[4].className === arrSpanFour[4].className
      ) {
        gameOne.results(clickCounter);
      }
    }

    if (
      spanFiveChildCount >= 5 &&
      spanTwoChildCount >= 5 &&
      spanThreeChildCount >= 5 &&
      spanFourChildCount >= 5
    ) {
      if (
        arrSpanFive[4].className === arrSpanTwo[4].className &&
        arrSpanFive[4].className === arrSpanThree[4].className &&
        arrSpanFive[4].className === arrSpanFour[4].className
      ) {
        gameOne.results(clickCounter);
      }
    }
  }

  //diagonals
  diagonalEval() {
    let arrSpanOne = $("span#one div").toArray();
    let arrSpanTwo = $("span#two div").toArray();
    let arrSpanThree = $("span#three div").toArray();
    let arrSpanFour = $("span#four div").toArray();
    let arrSpanFive = $("span#five div").toArray();
    let spanOneChildCount = $("#one div").length;
    let spanTwoChildCount = $("#two div").length;
    let spanThreeChildCount = $("#three div").length;
    let spanFourChildCount = $("#four div").length;
    let spanFiveChildCount = $("#five div").length;
    // diagonal - bottom right
    if (
      spanFiveChildCount >= 1 &&
      spanTwoChildCount >= 4 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 2
    ) {
      if (
        arrSpanFive[0].className === arrSpanTwo[3].className &&
        arrSpanFive[0].className === arrSpanThree[2].className &&
        arrSpanFive[0].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - top right
    if (
      spanFiveChildCount >= 5 &&
      spanTwoChildCount >= 2 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 4
    ) {
      if (
        arrSpanFive[4].className === arrSpanTwo[1].className &&
        arrSpanFive[4].className === arrSpanThree[2].className &&
        arrSpanFive[4].className === arrSpanFour[3].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - top left
    if (
      spanOneChildCount >= 5 &&
      spanTwoChildCount >= 4 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 2
    ) {
      if (
        arrSpanOne[4].className === arrSpanTwo[3].className &&
        arrSpanOne[4].className === arrSpanThree[2].className &&
        arrSpanOne[4].className === arrSpanFour[1].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - bottom left
    if (
      spanOneChildCount >= 1 &&
      spanTwoChildCount >= 2 &&
      spanThreeChildCount >= 3 &&
      spanFourChildCount >= 4
    ) {
      if (
        arrSpanOne[0].className === arrSpanTwo[1].className &&
        arrSpanOne[0].className === arrSpanThree[2].className &&
        arrSpanOne[0].className === arrSpanFour[3].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - far left short
    if (
      spanOneChildCount >= 4 &&
      spanTwoChildCount >= 3 &&
      spanThreeChildCount >= 2 &&
      spanFourChildCount >= 1
    ) {
      if (
        arrSpanOne[3].className === arrSpanTwo[2].className &&
        arrSpanOne[3].className === arrSpanThree[1].className &&
        arrSpanOne[3].className === arrSpanFour[0].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - middle left short
    if (
      spanFiveChildCount >= 2 &&
      spanTwoChildCount >= 5 &&
      spanThreeChildCount >= 4 &&
      spanFourChildCount >= 3
    ) {
      if (
        arrSpanFive[1].className === arrSpanTwo[4].className &&
        arrSpanFive[1].className === arrSpanThree[3].className &&
        arrSpanFive[1].className === arrSpanFour[2].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - middle right short
    if (
      spanOneChildCount >= 2 &&
      spanTwoChildCount >= 3 &&
      spanThreeChildCount >= 4 &&
      spanFourChildCount >= 5
    ) {
      if (
        arrSpanOne[1].className === arrSpanTwo[2].className &&
        arrSpanOne[1].className === arrSpanThree[3].className &&
        arrSpanOne[1].className === arrSpanFour[4].className
      ) {
        gameOne.results(clickCounter);
      }
    }
    // diagonal - far right short
    if (
      spanFiveChildCount >= 4 &&
      spanTwoChildCount >= 1 &&
      spanThreeChildCount >= 2 &&
      spanFourChildCount >= 3
    ) {
      if (
        arrSpanFive[3].className === arrSpanTwo[0].className &&
        arrSpanFive[3].className === arrSpanThree[1].className &&
        arrSpanFive[3].className === arrSpanFour[2].className
      ) {
        gameOne.results(clickCounter);
      }
    }
  }

  // method to determine which player was the winner of the game
  results() {
    if (clickCounter % 2 == 0) {
      this.winner = playerTwo.name;
      this.loser = playerOne.name;
    } else {
      this.winner = playerOne.name;
      this.loser = playerTwo.name;
    }
    alert(
      `Game Over, Ghouls! ${this.winner} is the spooky winner! Rest in Peace, ${this.loser}.`
    );
    if (
      window.confirm("Would you like to rise from the dead and play again?")
    ) {
      clickCounter = 0;
      $(".clickedPlayerOne").remove();
      $(".clickedPlayerTwo").remove();
    } else {
      return;
    }
  }
  reset() {
    if (
      window.confirm("Are you sure you want to clear the board and start over?")
    ) {
      clickCounter = 0;
      $(".clickedPlayerOne").remove();
      $(".clickedPlayerTwo").remove();
    }
  }
}
// create the class for the player objects
class Player {
  constructor(name, className) {
    this.name = name;
    this.className = className;
  }
}

// create the variables for the two players
const playerOne = new Player(name, "clickedPlayerOne");
const playerTwo = new Player(name, "clickedPlayerTwo");
const gameOne = new Game();
let clickCounter = 0;

//prompt users for their names, and begin the game
playerOne.name = prompt("Player One, what is your name?");
if (playerOne.name == false) {
  playerOne.name = "Pumpkin";
  alert("We'll just call you Pumpkin, Player One.");
  $("header").append('<h2 class="playerOneName"></h2>');
  $("h2.playerOneName").append(
    document.createTextNode(`Player One: ${playerOne.name}`)
  );
} else {
  $("header").append('<h2 class="playerOneName"></h2>');
  $("h2.playerOneName").append(
    document.createTextNode(`Player One: ${playerOne.name}`)
  );
}

playerTwo.name = prompt("Player Two, what is your name?");
if (playerTwo.name == false) {
  playerTwo.name = "Ghost";
  alert("We'll just call you Ghost, Player Two.");
  $("header").append('<h2 class="playerTwoName"></h2>');
  $("h2.playerTwoName").append(
    document.createTextNode(`Player Two: ${playerTwo.name}`)
  );
} else {
  $("header").append('<h2 class="playerTwoName"></h2>');
  $("h2.playerTwoName").append(
    document.createTextNode(`Player Two: ${playerTwo.name}`)
  );
}

alert(`${playerOne.name}, you're up!`);

// event listener for clicks on tiles that runs method in Game class
$("span#one").click(function () {
  gameOne.addDivOne();
  gameOne.columnEval();
  gameOne.rowEval();
  gameOne.diagonalEval();
});
$("span#two").click(function () {
  gameOne.addDivTwo();
  gameOne.columnEval();
  gameOne.rowEval();
  gameOne.diagonalEval();
});
$("span#three").click(function () {
  gameOne.addDivThree();
  gameOne.columnEval();
  gameOne.rowEval();
  gameOne.diagonalEval();
});
$("span#four").click(function () {
  gameOne.addDivFour();
  gameOne.columnEval();
  gameOne.rowEval();
  gameOne.diagonalEval();
});
$("span#five").click(function () {
  gameOne.addDivFive();
  gameOne.columnEval();
  gameOne.rowEval();
  gameOne.diagonalEval();
});
$("button").click(function () {
  gameOne.reset();
});
