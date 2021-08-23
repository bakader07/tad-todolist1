alert("You can click on the circle on the left of tasks to delete");

var tasks = document.getElementById("tasks");

var addButton = document.getElementById("add");

function deleteElement(elmnt) {
    elmnt.style.backgroundColor = "#9966cc";
    elmnt.parentNode.style.textDecoration = "line-through";
}

function add() {
    var userInput = document.getElementById("text").value;
    if (userInput != "") {
        // * this part is to check the input is not empty
        var isNotEmpty = false;
        for (var i=0; i<userInput.length; i++){
            if (userInput[i] != " "){
                isNotEmpty = true;
                break;
            }
        }
        userInput = userInput.slice(i, userInput.length);

        // *! start here
        if (isNotEmpty === true) {
            var text = document.createTextNode(userInput);
            var circle = document.createElement("span");
            circle.setAttribute("title", "Click to delete");
            circle.setAttribute("onclick", "deleteElement(this)");
            var task = document.createElement("div");
            task.setAttribute("class", "task");
            task.appendChild(circle);
            task.appendChild(text);
            tasks.appendChild(task);
            console.log(task);
        }
    }
    
}