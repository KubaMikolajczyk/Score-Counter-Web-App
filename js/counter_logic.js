
// buttons and inputs selection
var p1AddButton = document.querySelector("#p1add");
var p2AddButton = document.querySelector("#p2add")
var resetButton = document.querySelector("#resetScore")
var winningCondition = document.querySelector("#winningCondition[type='number']")


// display selection
var winNumber = document.querySelector("#winNumber")
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")

// global variables
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1AddButton.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }

});

p2AddButton.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

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
})
