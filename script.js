console.log('Hello World')

let firstName = 'Enyinda'
console.log(firstName)

firstName = 'Hanachor'
let lastName = 'Temple'
const age = 23
const fullName = `My name is ${firstName} ${lastName} and I'm ${age} years old`
console.log(fullName)

const pi = 22/7;
console.log(pi)

let x = 'It\'s a good day!!!'
console.log(x)

x = 'It\'s a... \ngood day!!'
console.log(x)

x = 'It\'s a good\tday!'
console.log(x)

console.log(typeof fullName)
console.log(typeof pi)
console.log(typeof age)

const y = 1 == 1;
console.log(y)

const b = 1 === '1';
console.log(b)

const z = undefined;
let car;
console.log(car)

let bike = null;
console.log(bike)

const joy =Number('1')
console.log(typeof joy)

const sam = String(joy)
console.log(typeof sam)

const ijeoma = parseFloat(age)
console.log(ijeoma)

const bright = parseInt(pi)
console.log(bright)

//Using the "while", "for" and "do while" loop.
let person = {
    Name: "ENYINDA Temple Hanachor",
    Age : 24,
    Job : "Software Developer",
    City: "Port Harcourt"
}

for(let x in person){
    console.log(x + " is " + person[x])
}

let val = 1;
while(val <= 5){
    console.log("ENYINDA Temple is a good boy..." + val)
    val ++
}

do{
    console.log("Hanachor the great dev!!!")
    val++
    }while(val <=5)

let girls = new Array("Chioma", "Cynthia", "Ijeoma", "Joy")

for(let w in girls){
    console.log(girls[w] + " is a fine girl!")
};

//Creating functions
function hanachorEnyinda(){
    console.log("Wetin i do you sef...?")
}
hanachorEnyinda();

//Function with arguments
function printMyName(firstName, middleName, lastName, work){
    console.log(`My name is ${firstName} ${middleName} ${lastName}\nAnd I'm a ${work}`);
}

console.log(printMyName("ENYINDA", "Temple", "Hanachor", "Software Developer"))

//Funstion to return numbers
function returnNumber(num1, num2){
    return num1 + num2;
}

console.log("The addition is" + " " + returnNumber(20, 20))

//Window object
//alert
//alert("Hello pretty...!")

//prompt
//const input = prompt();
//alert(input)

//confirm
if(confirm("Do you want ot quite?")){
    console.log("Ok")
}else{
    console.log("Not really")
}