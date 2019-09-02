var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resestButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var score = document.querySelector("h1");

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
    score.textContent = p1Score + " to " + p2Score;
}