
// buttons and inputs selection
var p1AddButton = document.querySelector("#p1add");
var p1MinusButton = document.querySelector("#p1minus")
var p2AddButton = document.querySelector("#p2add");
var p2MinusButton = document.querySelector("#p2minus")
var resetButton = document.querySelector("#resetScore");
var winningCondition = document.querySelector("#winningCondition[type='number']");

// players columns
var firstPlayerColumn = document.querySelector("#p1column");
var secondPlayerColumn = document.querySelector("#p2column");


// display selection
var winNumber = document.querySelector("#winNumber");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

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
    } else if(option === 2){
      firstPlayerColumn.style.display = "block";
      secondPlayerColumn.style.display = "block";
    }
}



resetButton.addEventListener("click", function(){
  p1Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner");
  p2Score = 0;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");
  gameOver = false;

});

winningCondition.addEventListener("change", function(){
  winNumber.textContent = this.value;
  winningScore = Number(this.value);
});
