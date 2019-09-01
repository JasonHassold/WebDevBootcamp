var command = null;
var todos = [];

while (command !== "quit") {
    command = prompt("What would you like to do?");
    
    if (command === "new") {
        todos.push(prompt("What is the new todo?"));
    }
    else if (command === "list") {
        console.log(todos);
    }
}

alert("done");