var secretNumber = 43;

var guess = null;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number"));

    if (guess === secretNumber) {
        alert("You got it!");
    }
    else if (guess > secretNumber) {
        alert("Too high. Try again");
    }
    else if (guess < secretNumber) {
        alert("Too low. Try again");
    }
}
