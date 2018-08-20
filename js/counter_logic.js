var p1AddButton = document.querySelector("#p1add");
var p2AddButton = document.querySelector("#p2add")
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1AddButton.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }

});

p2AddButton.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});
