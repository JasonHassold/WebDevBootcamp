var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resestButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var p1Score = 0;
var p2Score = 0;
var score = document.querySelector("h1");
var winningScore = 5;
var input = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
input.value = winningScore;

input.addEventListener("change", function(){
    winningScore = Number(input.value);
    winningScoreDisplay.textContent = winningScore;
});

p1Button.addEventListener("click", function(){
    p1Score++;
    updateScore();
});

p2Button.addEventListener("click", function(){
    p2Score++;
    updateScore();
});

resestButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    updateScore();
});

function updateScore() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
    
    if (p1Score === winningScore) {
        p1Display.classList.add("winner");
        p2Display.classList.add("loser");
        alert("Player One Won!");
    }
    else if (p2Score === winningScore) {
        p2Display.classList.add("winner");
        p1Display.classList.add("loser");
        alert("Player Two Won!");
    }
    
}