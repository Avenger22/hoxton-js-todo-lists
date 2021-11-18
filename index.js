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

// var count = 0
// for (let element of todos) {
//     if (element.id === userInputId) {
//         count++
//     }
// }

//Here we ask what want use to do with this id, add a todolist or just show 
let userChoiceMenu = prompt(`Would you like to show the todoslist of this user ${users[userInputId - 1].name} \n or want to update the todolist with adding one there \n or want to update the todolist with updating one there \n or want to delete something from the todolist with adding one there \n Or do you want to change the user \n Or do you want to terminate the program \n so either "ADD" or "SHOW" or "DELETE" or "UPDATE" or "CLOSE" or "CHANGE USER" ???`)

if (userChoiceMenu === "ADD" || userChoiceMenu === "add") {

    let userTitleToDo = prompt("Enter title of TODO wich you want to add : ")
    let userCompletedToDo = prompt("Enter if you have finished it of TODO wich you want to add so its '1' or '0' : ")
    
    const userInputObject = {
        userId : userInputId,
        id: 21,
        title: userTitleToDo,
        completed: Boolean(userCompletedToDo)
    }

    alert(`Now we will update the todolist of the user with name : ${users[userInputId - 1].name} \n and his id : ${userInputId} \n and ADD an todolist item to this user`)
    alert(`Now user is updated with a new todolist wich is : ${userTitleToDo} \n and ${Boolean(userCompletedToDo)}`)
    console.log(`Now user is updated with a new todolist wich is title \n  : ${userTitleToDo} \n and completed : ${Boolean(userCompletedToDo)}`)
    alert("Now we will show them all")

    for (let element of todos) {
        if (element.userId === userInputId) {
            todos.push(userInputObject)
            break
        }
    }

    for (let element of todos) {
        if (element.userId === userInputId) {
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

else if (userChoiceMenu === "DELETE" || userChoiceMenu === "delete") {
    let userChoiceDeleteToDoUser = Number(prompt("Enter the id of the user wich you want to delete: from 1-10 "))
    let userChoiceDeleteToDoId = Number(prompt("Enter the id of the todo wich you want to delete from this user: "))
    alert("We will now delete this todo from database")

    for (let element of todos) {
        if (element.userId === userChoiceDeleteToDoUser && element.id === userChoiceDeleteToDoId) {
            delete element.title
            delete element.userId
            delete element.id
            delete element.completed
        }
    }

    for (let element of todos) {
        if (element.userId === userChoiceDeleteToDoUser) {
            alert(`The todolist of name : ${users[userChoiceDeleteToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            console.log(`The todolist of name : ${users[userChoiceDeleteToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
        }
    }

}


else if (userChoiceMenu === "UPDATE" || userChoiceMenu === "update") {
    let userChoiceUpdateToDoUser = Number(prompt("Enter the id of the user wich you want to update: from 1-10 "))
    let userChoiceUpdateToDoId = Number(prompt("Enter the id of the todo wich you want to update from this user: "))
    let userChoiceUpdateToDoTitle = prompt("Enter the title of this todo ")
    let userChoiceUpdateToDoCompleted = Boolean(prompt("Enter status of the  update todo '1' or '0': "))

    alert("We will now update this todo from database")

    for (let element of todos) {
        if (element.userId === userChoiceUpdateToDoUser && element.id === userChoiceUpdateToDoId) {
            element.title = userChoiceUpdateToDoTitle
            element.completed = userChoiceUpdateToDoCompleted
        }
    }

    for (let element of todos) {
        if (element.userId === userChoiceUpdateToDoUser) {
            alert(`The todolist of name : ${users[userChoiceUpdateToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            console.log(`The todolist of name : ${users[userChoiceUpdateToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
        }
    }
}

else if (userChoiceMenu === "CHANGE USER" || userChoiceMenu === "change user") {
    userInputId = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))
}

else if (userChoiceMenu === "CLOSE" || userChoiceMenu === "close") {
    throw new Error("User wanted to close the program !")
}