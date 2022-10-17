console.log('Hello, Logic')

let x = 10; //Global Condition
if(x > 2){
    console.log('Buy black marker')
    //Code
}else{
    //Alternative Code
    console.log('Buy any color')
}

//Exercise 1
//No.1
let myVariable = true;

//No.2
console.log(myVariable)

//No.3
if(myVariable){
    console.log('Wetin be your name?')
}else{ //No.4
    console.log('E concern you?')
}

//ELSE-IF STATEMENT
const marker = 'red';
const markerLength = 'short'

if (marker === 'black' && markerLength === 'short'){
    console.log('Buy black and short marker')
} else if((marker === 'red' || marker === 'green')  && markerLength === 'short'){
    console.log('Buy red or green and short marker')
} else{
    console.log('Buy any marker')
}

//NESTED IF
if(marker === 'black'){
    if(markerLength === 'short'){
        console.log('Buy black and short marker')
    }else{
        console.log('Let\'s manage the long one')
    }
}

//EXERCISE 2
//No.1
// const age = window.prompt('Please enter your age: ');
// console.log(age)

// //No.2
// const newAge = parseInt(age)
// // console.log(newAge);

// //No.3
// let message;

// //No.4
// if(newAge >= 21){
//     message = 'Your entry is confirmed and you can now purchase alcohol'
// } else if(newAge >= 19){
//     message = 'Your entry is confirmed but you can\'t purchase alcohol' //No.5
// } else{
//     message = 'You have been deny entry and you can\'t purchase alcohol' //No.6
// }

// //No.7
// console.log(message)

//CONDITIONAL TENARY OPERATORS
// const gender = 'Male';
// gender === 'Male'? console.log('He is a boy'): gender === 'Female'? console.log('She is a girl'): gender === 'Other'? console.log('He or She is others');

//EXERCISE 3
//No.1
const id = true;

//No.2
let message = id ? 'The ID is valid': 'The ID is not valid';

//No.3
console.log(message)


//CASE
const currentDay = 'Monday';
switch(currentDay){
    case 'Monday':
        console.log('I hate Mondays')
        break;
    case 'Tuesday':
        console.log('Tuesday is no class')
        break;
    case 'Wednesday':
        console.log('I love Wednesday')
        break;
    case 'Thursday':
        console.log('This is super story')
        break;
    case 'Friday':
        console.log('Thank God is Friday (TGIF)')
        break;
    case 'Sarturday':
        console.log('And on the seventh day, he rested')
}