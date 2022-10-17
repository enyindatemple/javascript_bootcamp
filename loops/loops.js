//WHILE LOOP
let i = 0;
while (i < 10){
    console.log(i);
    // i++; //i = i+1
    i +=2;
}

//We can have a while loop that looks for a value in an array.
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while(notFound && someArray.length > 0){
    if(someArray[0] === "Louiza"){
        console.log('Gotch you! \n' +someArray[0])
        notFound = false;
    } else{
        someArray.shift();
    }
}

//Exercise while loop
//No.1
const maxValue = 100;

//No.2
const random = Math.floor(Math.random() * maxValue + 1);
// console.log(random);

//No.3
let isCorrect = false;
let lives = 5;

//No.4
let number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))

while(!isCorrect && lives >=1){
    if (number === random){
        isCorrect = true;
        console.log('Hurray, you guessed it rightly')
    }else{
        lives--;
        if (lives ===0){
            console.log('Game Over')
            console.log(`Your number is: \n ${random}`)
        } else{
            if(number > random){
                console.log('Your guess is high, go low')
                number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
            }else{
                console.log('Your guess is low, go high')
                number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
            }
        }
        
        }
    }

// DO WHILE LOOP
// let number;
// do{
//     number = parseInt(prompt("Please enter a number from 0 and 100"));
// } while(!(number >= 0 && number < 100)){
//     console.log(number)
// };

//FOR LOOP
// for(let x =0; x < 10; x++){
//     console.log(x)
// }

// let arr = [];
// for(let x = 0; x < 100; x++){
//     arr.push(x);
// }
// console.log(arr)

// //NESTED LOOP
// let arrOfArrays = [];

// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);
//     for(let j = 0; j < 7; j++){
//         arrOfArrays[i].push(j);
//     }
// }
// console.log(arrOfArrays)

// //A FOR LOOP TO PRINT AN ARRAY
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }