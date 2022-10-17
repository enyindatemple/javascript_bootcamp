console.log('Hello built-in method')

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(e, i){
//     console.log(`Printing stuff: ${e} on an array\nPosition: ${i}`);
// }
// arr.forEach(printStuff);

// arr.forEach((e, i) =>
//     console.log(`Best way of printing Element: ${e} & Index: ${i}`)
// )

// let arr = ["squirell", 5, "Tjed", new Date(), true];

// function checkString(e){
//     return typeof e==='string';
// }

// // (e, i) => typeof e==='string'

// let filterArr = arr.filter((e) => typeof e==='string');

// console.log(filterArr);
// console.log(arr.every(checkString));

// arr.copyWithin(0, 3, 4); //It will replace index 0 with index 3 but not index 4.

// arr.copyWithin(1, 3, 5)
// console.log(arr);

let arr = [1000, 2000, 3000, 4000];
let mappedArr = arr.map(x => `$${x}`); //x represents an item in every given time.
console.log(mappedArr);