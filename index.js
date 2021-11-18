/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

//THIS GETS ALL THE USERS OBJECT AND OTHER FROM OTHER FILE
console.log("users: ", users);
console.log("todos: ", todos);
alert("Welcome to this program, here is the database wich will be displayed shortfly after all users here :")

//We iterate through an array and element gets its object then we acces the object properties to get the VALUE
for (let element of users) {
    alert(`Hi, this user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
    console.log(`Hi, this user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
}

let userInputId = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))
//We check if user inputs a number not a stirng or anything else
if (Number.isNaN(userInputId)) {
    alert("Please user enter a number not a string")
    userInputId = Number(prompt("Please enter again this time a number : "))

    if (Number.isNaN(userInputId)) {
        alert("Sorry User we terminate the program you are trolling us.")
        throw new Error("This user is trolling entering string in place of numbers")
    }
}
//Another Check this time if users enters negative or big numbers wich are not in database
if (userInputId > 10 || userInputId < 1) {
    alert("Please enter something between 1-10")
    userInputId = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))

    if (userInputId > 10 || userInputId < 1) {
        alert("Sorry User we terminate the program you are trolling us.")
        throw new Error("This user is trolling entering negative values and bigger than 10 in place of numbers 1-10")
    }
}

//Now we iterate trough the array users to find the specific id wich the user wanted from prompt
for (let element of users) {
    if (element.id === userInputId) {
    alert(`Hi, the user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
    console.log(`Hi, this user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
    }
}

for (let element of todos) {
    var count = 0
    if (element.id === userInputId) {
        count++
    }
}


//Here we ask what want use to do with this id, add a todolist or just show 
let userChoiceMenu = prompt(`Would you like to show the todoslist of this user ${users[userInputId - 1].name} \n or want to update the todolist with adding one there \n so either "ADD" or "SHOW" ???`)

if (userChoiceMenu === "ADD" || userChoiceMenu === "add") {
    let userTitleToDo = prompt("Enter title of TODO wich you want to add : ")
    let userCompletedToDo = prompt("Enter if you have finished it of TODO wich you want to add so its '1' or '0' : ")
    
    const userInputObject = {
        userId : userInputId,
        id: todos[userInputId - 1].id,
        title: userTitleToDo,
        completed: userCompletedToDo
    }

    alert(`Now we will update the todolist of the user with name : ${users[userInputId - 1].name} \n and his id : ${userInputId} \n and ADD an todolist item to this user`)
    alert(`Now user is updated with a new todolist wich is : ${userTitleToDo} \n and ${Boolean(userCompletedToDo)}`)
    console.log(`Now user is updated with a new todolist wich is : ${userTitleToDo} \n and ${Boolean(userCompletedToDo)}`)
    alert("Now we will show them all")
    
    for (let element of todos) {
        if (element.userId === userInputId && element.id >= count) {
            todos.push(userInputObject)
            alert(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            console.log(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
        }
    }
}


//If user just want to show and display data of that user with that id his todolist
else if (userChoiceMenu === "SHOW" || userChoiceMenu === "show") {
    alert(`Now we will display the user with name : ${users[userInputId - 1].name} \n and his id : ${userInputId} \n his all TODOLIST and all infos about it `)
    
    //Here we check for todos of userIputId from the prompt and we get all todos from that user along with the name of the user also status
    for (let element of todos) {
        if (element.userId === userInputId) {
            alert(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            console.log(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
        }
    }
}