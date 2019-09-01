var answer = null;

while (answer !== "yes" && answer !== "yeah") {
    answer = prompt("Are we there yet?").toLowerCase();
}

alert("We made it!!!");