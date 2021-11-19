//FUNCTION GROUPING IS HERE also the data.js is linked with this by the function below
//THIS GETS ALL THE USERS OBJECT AND OTHER FROM OTHER FILE
function getDataFromOtherFile() {
    console.log("users: ", users);
    console.log("todos: ", todos);
    alert("Welcome to this program, here is the database wich will be displayed shortfly after all users here :")
}

// addMenu :: (string) ==> undefined Just does lots of things but doesnt return anything
function addMenu(userChoiceMenuParameter) {

    if (userChoiceMenuParameter === "ADD" || userChoiceMenuParameter === "add") {

        let userTitleToDo = prompt("Enter title of TODO wich you want to add : ")
        let userCompletedToDo = Boolean(prompt("Enter if you have finished it of TODO wich you want to add so its '1' or '0' : "))
        
        const userInputObject = { //Now i create a if scope object i use it only here dont need outside
            userId : userInputId,
            id: 21, //This is my only problem doesnt show errors and works if i manually use it but i would love to have a way to get the id of todo not user and to +1
            title: userTitleToDo,
            completed: Boolean(userCompletedToDo)
        }

        alert(`Now we will update the todolist of the user with name : ${users[userInputId - 1].name} 
        \n and his id : ${userInputId} \n and ADD an todolist item to this user`)

        alert(`Now user is updated with a new todolist wich is : ${userTitleToDo} 
        \n and ${Boolean(userCompletedToDo)}`)

        console.log(`Now user is updated with a new todolist wich is title 
        \n  : ${userTitleToDo} \n and completed : ${Boolean(userCompletedToDo)}`)

        alert("Now we will show them all")

        for (let element of todos) { //Here i create a new element in array wich is an OBJECT
            if (element.userId === userInputId) {
                todos.push(userInputObject) //here adding an object inside array TODOS
                break // Crucial doesnt make infinite array adding objects and works somehow if i remove this then things break
            }
        }

        for (let element of todos) { //this loop is just to show all the todos of user with id and to show the added todo
            if (element.userId === userInputId) {
                alert(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
                console.log(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            }
        }

    }

}

//showMenu :: (string) ==> undefined, just does lots of things, doesnt return
function showMenu(userChoiceMenuParameter) {

    //If user just want to show and display data of that user with that id his todolist MENU2
        if (userChoiceMenuParameter === "SHOW" || userChoiceMenuParameter === "show") {
            alert(`Now we will display the user with name : ${users[userInputId - 1].name} \n and his id : ${userInputId} \n his all TODOLIST and all infos about it `)
            
            for (let element of todos) {     //Here we check for todos of userIputId from the prompt and we get all todos from that user along with the name of the user also status
                if (element.userId === userInputId) {
                    alert(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
                    console.log(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
                }
            }
        }
    
}

//deleteMenu :: (string) ==> undefined void, does things doesnt return
function deleteMenu(userChoiceMenuParameter) {

    if (userChoiceMenuParameter === "DELETE" || userChoiceMenuParameter === "delete") { //this is MENU3
        let userChoiceDeleteToDoUser = Number(prompt("Enter the id of the user wich you want to delete: from 1-10 "))
        let userChoiceDeleteToDoId = Number(prompt("Enter the id of the todo wich you want to delete from this user: "))
        alert("We will now delete this todo from database")
    
        for (let element of todos) {
            if (element.userId === userChoiceDeleteToDoUser && element.id === userChoiceDeleteToDoId) {
                delete element.title //tried only delete element didnt do anything, then tried this worked perfectly
                delete element.userId
                delete element.id
                delete element.completed
            }
        }
    
        for (let element of todos) { //Here we just display the todolist for this menu
            if (element.userId === userChoiceDeleteToDoUser) {
                alert(`The todolist of name : ${users[userChoiceDeleteToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
                console.log(`The todolist of name : ${users[userChoiceDeleteToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            }
        }
    
    }

}

//updateMenu :: (string) ==> undefined void, does things doesnt return
function updateMenu(userChoiceMenuParameter) {

    if (userChoiceMenuParameter === "UPDATE" || userChoiceMenuParameter === "update") {
        let userChoiceUpdateToDoUser = Number(prompt("Enter the id of the user wich you want to update: from 1-10 "))
        let userChoiceUpdateToDoId = Number(prompt("Enter the id of the todo wich you want to update from this user: "))
        let userChoiceUpdateToDoTitle = prompt("Enter the title of this todo ")
        let userChoiceUpdateToDoCompleted = Boolean(prompt("Enter status of the  update todo '1' or '0': "))
        alert("We will now update this todo from database")
    
        for (let element of todos) { //Here the update works and is done
            if (element.userId === userChoiceUpdateToDoUser && element.id === userChoiceUpdateToDoId) {
                element.title = userChoiceUpdateToDoTitle
                element.completed = userChoiceUpdateToDoCompleted
            }
        }
    
        for (let element of todos) { //Here just to display the list from this menu
            if (element.userId === userChoiceUpdateToDoUser) {
                alert(`The todolist of name : ${users[userChoiceUpdateToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
                console.log(`The todolist of name : ${users[userChoiceUpdateToDoUser - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
            }
        }
    }

}

//closeMenu :: (string) ==> undefined void, does things doesnt return
function closeMenu(userChoiceMenuParameter) {

   // Here is MENU 6 CLOSE just throw an error if he chooses this menu in prompt of beginning
    if (userChoiceMenuParameter === "CLOSE" || userChoiceMenuParameter === "close") {
        throw new Error("User wanted to close the program !")
    }

}

//changeUserMenu :: (string, number) ==> undefined void, does things doesnt return
function changeUserMenu(userChoiceMenuParameter,userInputIdParameter) {

    //Here is MENU 5 CHANGE USER
    if (userChoiceMenuParameter === "CHANGE USER" || userChoiceMenuParameter === "change user") {
    userInputIdParameter = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))
    }

}

//userMenuDecide :: (string, number) ==> undefined void, does things doesnt return
function userMenuDecide(userChoiceMenuParameter, userInputIdParameter) {

    if (userChoiceMenuParameter === "ADD" || userChoiceMenuParameter === "add") {
        addMenu(userChoiceMenu)
    }
    
    else if (userChoiceMenuParameter === "SHOW" || userChoiceMenuParameter === "show") {
        showMenu(userChoiceMenu)
    }
    
    else if (userChoiceMenuParameter === "DELETE" || userChoiceMenuParameter === "delete") {
        deleteMenu(userChoiceMenu)
    }
    
    else if (userChoiceMenuParameter === "UPDATE" || userChoiceMenuParameter === "update") {
        updateMenu(userChoiceMenu)
    }
    
    else if (userChoiceMenuParameter === "CLOSE" || userChoiceMenuParameter === "close") {
        closeMenu(userChoiceMenu)
    }

    else if (userChoiceMenuParameter === "CHANGE USER" || userChoiceMenuParameter === "change user") {
        changeUserMenu(userChoiceMenu, userInputIdParameter)
    }
    
}

function iterateArrayToGetAllUsers() {

    //We iterate through an array and element gets its object then we acces the object properties to get the VALUE
    let messageDisplay
    for (let element of users) {
        messageDisplay += `Hi, this user id is : ${element.id}  and the user name is : ${element.name} \n and the user city is : ${element.address.city} \n `
        console.log(`Hi, this user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
    }
    alert(messageDisplay)

}

function checkUserIdNumber(userInputIdParameter) {

    if (Number.isNaN(userInputIdParameter)) {
        alert("Please user enter a number not a string")
        userInputId = Number(prompt("Please enter again this time a number : "))
    
        if (Number.isNaN(userInputIdParameter)) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering string in place of numbers")
        }
    }
    
    //Another Check this time if users enters negative or big numbers wich are not in database
    if (userInputId > 10 || userInputIdParameter < 1) {
        alert("Please enter something between 1-10")
        userInputId = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))
    
        if (userInputId > 10 || userInputIdParameter < 1) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering negative values and bigger than 10 in place of numbers 1-10")
        }
    }
    
}

function iterateArrayToFindSpecificIdInput() {

    //Now we iterate trough the array users to find the specific id wich the user wanted from prompt
    for (let element of users) {
        if (element.id === userInputId) {
        alert(`Hi, the user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
        console.log(`Hi, this user id is : ${element.id} \n and the user name is : ${element.name} \n and the user city is : ${element.address.city} `)
        }
    }
    
}
//-------------------------------------------------------------------------------

getDataFromOtherFile()
iterateArrayToGetAllUsers()
let userInputId = Number(prompt("Please enter an id wich you want to look into from 1-10 in users database : "))
checkUserIdNumber(userInputId)
iterateArrayToFindSpecificIdInput()

let userChoiceMenu = prompt(`Would you like to show the todoslist of this user ${users[userInputId - 1].name} 
    \n or want to update the todolist with adding one there 
    \n or want to update the todolist with updating one there 
    \n or want to delete something from the todolist with adding one there 
    \n Or do you want to change the user \n Or do you want to terminate the program 
    \n so either "ADD" or "SHOW" or "DELETE" or "UPDATE" or "CLOSE" or "CHANGE USER" ???`)

userMenuDecide(userChoiceMenu, userInputId)


