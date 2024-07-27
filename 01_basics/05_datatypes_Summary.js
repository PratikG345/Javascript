// ------------------------------------------------Datatypes Summary--------------------------------------

//  # Primitive
//      7 types: String, Number, Boolean, null,
//               undefined, Symbol, BigInt

// Two Topics to master javascript : Objects and Browser events
// Reference (Non Primitive) : Array, Objects, Functions

// JS is a dynamically typed langauge

//Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.

// 1. Array ( [ ] )
// 2. Object ( { } )
// 3. Function ( function( ){ } )

// Array exmaple:
const heros = ["Vision","Iron-Man","Hulk"];

// Object Example:
let myObj = {
    name: "Pratik",
    age: 22, 
}

// Function Example: 
const myFunction = function(){
    console.log("Hello world!");
}

let hero = null

console.log(typeof heros) // Type of array is oject
console.log(typeof myObj); // type of object is object
console.log(typeof myFunction); // type of function is function
console.log(typeof hero); // type of null is object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primituve), Heap (Non-Primitive)
