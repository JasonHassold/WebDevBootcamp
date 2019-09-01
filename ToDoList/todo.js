var command = null;
var todos = [];

while (command !== "quit") {
    command = prompt("What would you like to do?");
    
    if (command === "new") {
        todos.push(prompt("What is the new todo?"));
    }
    else if (command === "list") {
        console.log("**********");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }
    else if (command === "delete") {
        todos.splice(Number(prompt("Enter index of todo to delete")), 1);
    }
}

alert("done");