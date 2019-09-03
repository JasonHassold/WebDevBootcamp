var difficulty = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msg = document.querySelector("#msg");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");



updateColors();

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    difficulty = 3;
    updateColors();
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    difficulty = 6;
    updateColors();
});

resetButton.addEventListener("click", function(){
    updateColors();
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    msg.textContent = "";
});

function updateColors() {
    colors = generateRandomColors(difficulty);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            
            squares[i].style.backgroundColor = colors[i];
        
            squares[i].addEventListener("click", function(){
                var clickedColor = this.style.backgroundColor;
                
                if(clickedColor === pickedColor) {
                    msg.textContent = "Correct!";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetButton.textContent = "Play Again?"
                } else {
                    this.style.backgroundColor = "#232323";
                    msg.textContent = "Try Again";
                }
            }); 
        }
        else {
            squares[i].style.display = "none";
        }
    }
}


function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var pick = Math.floor(Math.random() * colors.length);

    return colors[pick];
}

function generateRandomColors(num) {
    var colors = [];
    
    for(var i = 0; i < num; i++) {
        colors.push(randomColor());
    }
    
    return colors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}