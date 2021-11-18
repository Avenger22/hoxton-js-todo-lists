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
alert(`Now we will display the user with name : ${users[userInputId - 1].name} \n and his id : ${userInputId} \n his all TODOLIST and all infos about it `)

//Here we check for todos of userIputId from the prompt and we get all todos from that user along with the name of the user also status
for (let element of todos) {
    if (element.userId === userInputId) {
        alert(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
        console.log(`The todolist of name : ${users[userInputId - 1].name} \n and the id of todo is : ${element.id} \n and the titles are : ${element.title} \n and the status of it is : ${element.completed}`)
    }
}