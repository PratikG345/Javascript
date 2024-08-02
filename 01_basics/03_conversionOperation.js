"use Strict"
// let score = "33abc"
// let score = "33abc"
let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
"33" => 33
"33abc" => NaN(Not a number)
true => 1 false => 0
undefined => NaN
*/
let isLoggedIn = undefined
let valueOfIsLoggedIn = Boolean(isLoggedIn)
console.log(valueOfIsLoggedIn)

/*
1 => true
23 => true
0 = false
"23abc" => true
"" => false
null => false
undefined => false
*/

let someNumber = undefined
let srtingNumber = String(someNumber)
console.log(srtingNumber);
console.log(typeof(srtingNumber));

/*
33 => 33
*/

// ************** operations ***************

let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2); //4
// console.log(2-2); // 0
// console.log(2*2);// 4
// console.log(2**3); // means 2 to the power of 3 // 8
// console.log(2/2); // 1
// console.log(2%2); // Remainder // 0  

let str1 = "Pratik"
let str2 = " Gaikwad"
let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2) // 12
console.log("1" + "2") // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log("1" + (2 + 2)) // here first 2+2 becomes 4 then joints with 1
console.log(1 + 2 + "2") // here 1+2 becomes 3 and joints with 2,  // 32



