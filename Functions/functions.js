console.log('Welcome to functions');

// function sayHello(){
//     let you = prompt("What is your name? ");
//     console.log("Hello", you + "!");
// }

// sayHello()

//Parameter is used like a placeholder when creating a function, it is the variable listed into the paranthesis of the function definition while...
//Argument is used when calling the function

function addTwoNumbers(x, y){
    console.log(x+y);
}
addTwoNumbers(4, 5);

//ARROW FUNCTIONS
let addTwoNumbers2 = (x, y) => console.log(x + y);

addTwoNumbers2(7, 7);

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach((item, index)=>{
    let newName = "Mr." + item
    console.log(`${index +1}. ${newName}`)
})

//USING SPREAD OPERATOR
let spread = ["so", "much", "fun"];
let message = ["Javascript", "is", ...spread, "and", "powerful"];

console.log(message)

function addArr(x, ...y){
    console.log(x + y);
}

// addArr("Hi", " dear", " how are you doing?")

addArr(3, 4, 6)

//Using arrow function
let addThreeNumbers = (x, y, z) => x + y + z;

console.log(addThreeNumbers(4, 5, 6))

//Using normal function
function addThreeNumbers(x, y, z){
    return x + y + z;
}