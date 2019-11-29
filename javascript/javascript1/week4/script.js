currentDate = new Date();
monthsOfTheYear = ["january","february","march","april","may","june","july","august","september","october","november","december"];
let user = {
    name:[],
    toDoList:[],
    favoriteDish:[],
    calendar:[]
};


function getReplay(command){
    if (command.includes("Hello my name is")){
        command = command.split(' ');// splits the string in an array
        if (command[command.length-1] == user.name){ //checks if the user has already presented yourself
            console.log(`We aready know you, ${user.name}`);    
        } else {
        user.name = command.pop(); //sends the user name to the object user
        console.log(`Nice to meet you ${user.name}`); 
        }       
    }


    if (user.name == ""){ //Checks if the username is empty
        console.log(`You must present your self first`);
    } 
    
    
    if (command.includes("What is my name?") && user.name != "") { //returns the user name
        console.log(`Your name is ${user.name}`);
    }
    
    
    if (command.includes("Add" && "to my todo")){ //Adds somethong to the to do list
        command = command.split(' ');
        command.shift(); //deletes the first item in an array       
        toDoList = command.slice(0,length-3); //deletes the 3 last items in an array
        toDoList = toDoList.join(" ") //transforms the items of an array in a string
        console.log(`${toDoList} added to your todo`);       
        user.toDoList.push(toDoList); // sends the to do item to the array inside the object "user"
    }


    if (command.includes("Remove" && "from my todo")){ //Removes an item from the to do list
        command = command.split(' ');
        command.shift();
        toDoList = command.slice(0,length-3);
        toDoList = toDoList.join(" ");
        console.log(`Removed ${toDoList} from your todo`);
        console.log("item removed", user.toDoList.splice(user.toDoList[0],1),); 
    }


    if (command.includes("What is on my todo?")){ //returns what is already inside the to do list
        console.log(`you have ${user.toDoList.length} todos: ${user.toDoList}`); 
    }


    if (command.includes("What day is today?")){ //returns the current day
        let currentDay = currentDate.getDate(); //gets the day of the month
        let currentMonth = monthsOfTheYear[currentDate.getMonth()]; //gets the month of the year in number and transfom in name of the month                   
        let currentYear = currentDate.getFullYear(); //gets the year with 4 digits 
        console.log(`${currentDay} of ${currentMonth} ${currentYear}`);
    }


    if (command.includes("+")){ //Makes an adition 
        command = command.split(' ');
        let x = command[2]; //transforms the number in a variable
        let y = command[4];
        sum = parseInt(x)+parseInt(y); //make the operation with the numbers
        console.log(sum);
    }
    

    if (command.includes("*")){ //Makes a multiplication
        command = command.split(' ');
        let x = command[2];
        let y = command[4];
        mult = parseInt(x)*parseInt(y);
        console.log(mult);
    }


    if (command.includes("-")){ //Makes an subtraction
        command = command.split(' ');
        let x = command[2];
        let y = command[4];
        subt = parseInt(x)-parseInt(y);
        console.log(subt);
    }
    

    if (command.includes("/")){ //Makes a division
        command = command.split(' ');
        let x = command[2];
        let y = command[4];
        div = parseInt(x)/parseInt(y);
        console.log(div);
    }


    if (command.includes("My favorite dish is")){
    command = command.split(' ');
    console.log(favoriteDish = command.slice(4,command.length)); //Takes the last name of the dish
    favoriteDish = favoriteDish.join(" ");
    favoriteDish = user.favoriteDish.push(favoriteDish);
    console.log(user.favoriteDish);
    }


    if (command.includes("Set a timer for")){
        command = command.split(' ');
        if (command[5] === "secunds"){ //takes the amount of secunds
        setTimeout(timeIsOver, (command[4]*1000));
            function timeIsOver(){
            alert(`${command[4]} secunds are gone`)    
            }
        } else if (command[5] === "minuts"){ //takes the minuts amounts
        setTimeout(timeIsOver, (command[4]*1000*60));
            function timeIsOver(){
            alert(`${command[4]} minuts are gone`)    
            }
        }
    }











}
getReplay("Hello my name is Benjamin")
getReplay("Hello my name is Benjamin")
getReplay("What is my name?")
getReplay("Add fishing to my todo")
getReplay("Add singing in the shower to my todo")
getReplay("Remove fishing from my todo")
getReplay("Add fishing to my todo")
getReplay("What is on my todo?")
getReplay("What day is today?")
getReplay("what is 3 + 3")
getReplay("what is 3 - 3")
getReplay("what is 3 * 3")
getReplay("what is 3 / 3")
getReplay("My favorite dish is lasagna a bolonhesa")
getReplay("Set a timer for 0.1 minuts")
getReplay("Set a timer for 2 secunds")


console.log(user);