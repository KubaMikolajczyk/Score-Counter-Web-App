
// player 1 buttons & display
var p1AddButton = document.querySelector("#p1add");
var p1MinusButton = document.querySelector("#p1minus")
var p1Display = document.querySelector("#p1Display");

// player 2 buttons & display
var p2AddButton = document.querySelector("#p2add");
var p2MinusButton = document.querySelector("#p2minus")
var p2Display = document.querySelector("#p2Display");

// player 3 buttons & display
var p3AddButton = document.querySelector("#p3add");
var p3MinusButton = document.querySelector("#p3minus")
var p3Display = document.querySelector("#p3Display");

// player 4 buttons & display
var p4AddButton = document.querySelector("#p4add");
var p4MinusButton = document.querySelector("#p4minus")
var p4Display = document.querySelector("#p4Display");

// player 5 buttons & display
var p5AddButton = document.querySelector("#p5add");
var p5MinusButton = document.querySelector("#p5minus")
var p5Display = document.querySelector("#p5Display");

// player 6 buttons & display
var p6AddButton = document.querySelector("#p6add");
var p6MinusButton = document.querySelector("#p6minus")
var p6Display = document.querySelector("#p6Display");

// game buttons
var resetButton = document.querySelector("#resetScore");
var winningCondition = document.querySelector("#winningCondition[type='number']");

// players columns
var firstPlayerColumn = document.querySelector("#p1column");
var secondPlayerColumn = document.querySelector("#p2column");
var thirdPlayerColumn = document.querySelector("#p3column");
var fourthPlayerColumn = document.querySelector("#p4column");
var fifthPlayerColumn = document.querySelector("#p5column");
var sixthPlayerColumn = document.querySelector("#p6column");

// rows
var firstRow = document.querySelector("#firstRow");
var secondRow = document.querySelector("#secondRow");


// initial display
firstRow.classList.add("fullSize");
secondPlayerColumn.style.display = "none";
thirdPlayerColumn.style.display = "none";
fourthPlayerColumn.style.display = "none";
fifthPlayerColumn.style.display = "none";
sixthPlayerColumn.style.display = "none";

// display selection
var winNumber = document.querySelector("#winNumber");


// global variables
var gameOver = false;
var winningScore = 5;


class Player{
  constructor(pNumber, addButton, minusButton, display, score){
  this.pNumber = pNumber;
  this.score = score;

addButton.addEventListener("click", function(){
  score = addScore(display, score);
    });

minusButton.addEventListener("click", function(){
  score = minusScore(display, score)
    });
  }
}

var firstPlayer = new Player(1, p1AddButton, p1MinusButton, p1Display, 0);
var secondPlayer = new Player(2, p2AddButton, p2MinusButton, p2Display, 0);
var thirdPlayer = new Player(2, p3AddButton, p3MinusButton, p3Display, 0);
var fourthPlayer = new Player(2, p4AddButton, p4MinusButton, p4Display, 0);
var fifthPlayer = new Player(2, p5AddButton, p5MinusButton, p5Display, 0);
var sixthPlayer = new Player(2, p6AddButton, p6MinusButton, p6Display, 0);

function addScore(display, score){
  if(!gameOver){
    if(score){
      score++;
      console.log(score);
    } else{
      score = 1;
      console.log(score);
    }
    if(score === winningScore){
      display.classList.add("winner");
      gameOver = true;
    }
    display.textContent = score;
    return score;
  }
}

function minusScore(display, score){
  if(!gameOver){
    if(score){
      score--;
      console.log(score);
    } else{
      score = 0;
      console.log(score);
    }
    if(score === winningScore){
      display.classList.add("winner");
      gameOver = true;
    }
    display.textContent = score;
    return score;
  }
}

function hidingColumn(option) {
    if(option === 1){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "none";
      thirdPlayerColumn.style.display = "none";
      fourthPlayerColumn.style.display = "none";
      fifthPlayerColumn.style.display = "none";
      sixthPlayerColumn.style.display = "none";

      firstRow.classList.remove("halfSize")
      secondRow.classList.remove("halfSize");
      firstRow.classList.add("fullSize");

    } else if(option === 2){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
      thirdPlayerColumn.style.display = "none";
      fourthPlayerColumn.style.display = "none";
      fifthPlayerColumn.style.display = "none";
      sixthPlayerColumn.style.display = "none";

      firstRow.classList.remove("halfSize")
      secondRow.classList.remove("halfSize");
      firstRow.classList.add("fullSize");

    } else if(option === 3){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
      thirdPlayerColumn.style.display = "block";
      fourthPlayerColumn.style.display = "none";
      fifthPlayerColumn.style.display = "none";
      sixthPlayerColumn.style.display = "none";

      firstRow.classList.remove("halfSize")
      secondRow.classList.remove("halfSize");
      firstRow.classList.add("fullSize");

    } else if(option === 4){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
      thirdPlayerColumn.style.display = "block";
      fourthPlayerColumn.style.display = "block";
      fifthPlayerColumn.style.display = "none";
      sixthPlayerColumn.style.display = "none";

      firstRow.classList.remove("fullSize")
      firstRow.classList.add("halfSize");
      secondRow.classList.add("halfSize");

    } else if(option === 5){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
      thirdPlayerColumn.style.display = "block";
      fourthPlayerColumn.style.display = "block";
      fifthPlayerColumn.style.display = "block";
      sixthPlayerColumn.style.display = "none";

      firstRow.classList.remove("fullSize")
      firstRow.classList.add("halfSize");
      secondRow.classList.add("halfSize");

    } else if(option === 6){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
      thirdPlayerColumn.style.display = "block";
      fourthPlayerColumn.style.display = "block";
      fifthPlayerColumn.style.display = "block";
      sixthPlayerColumn.style.display = "block";

      firstRow.classList.remove("fullSize")
      firstRow.classList.add("halfSize");
      secondRow.classList.add("halfSize");

    }
}



resetButton.addEventListener("click", function(){
  resetScore = 0;
  p1Display.textContent = resetScore;
  p2Display.textContent = resetScore;
  p3Display.textContent = resetScore;
  p4Display.textContent = resetScore;
  p5Display.textContent = resetScore;
  p6Display.textContent = resetScore;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p3Display.classList.remove("winner");
  p4Display.classList.remove("winner");
  p5Display.classList.remove("winner");
  p6Display.classList.remove("winner");
  gameOver = false;

});

winningCondition.addEventListener("change", function(){
  winNumber.textContent = this.value;
  winningScore = Number(this.value);
});
