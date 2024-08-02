// // array

// const myArray = [0,1,2,3,4,5, true, "pratik"]
// console.log(myArray[7])
// // Array enables storing a collecion of multuple items under a single variable
// // arrays in js are resizable
// // zero based indexing

// const myArr2 = new Array(1,2,3,4,5)

// //Array Methods
// myArr2.push(6) // push fucntion is used to add new value in an array
// myArr2.push(true)
// myArr2.push("Pratik")
// console.log(myArr2);

// myArr2.pop() // pop function remains the last value of an array
// // myArr2.unshift(9) // unshift functions add a value to the 0th index or at te start of an array
// myArr2.shift() // shift funtion removes the first element of an array
// console.log(myArr2);
// console.log(myArr2.includes(9));
// console.log(myArr2.includes(4)); // checks if the value in there in an array or not
// // includes function gives boolean value
// console.log(myArr2.indexOf(4)); // shows the location of an element

// Slice and splice function

const myN1 = [1,2,3,4,5,6]
console.log("A", myN1);

const arr2 = myN1.slice(0,3) // slices index from 0 to 3 (excluding 3)
console.log(arr2) // outputs : [1,2,3]
console.log("After Slice",myN1); // Outputs : [1,2,3,4,5,6]
// Slice function returns a portion of array into a new array object from start to end (end not included)
// Orignal array is not modified

const arr3 = myN1.splice(0,3) // Start at inddex 0 and remove 3 elements
console.log(arr3) // Outputs : [1,2,3]
console.log("After Splice",myN1); // Outputs: [4,5,6]
// splice modifies the orignal array and returns an array containing removed elements
// Splice removes elements from the array, modifies the original array, and returns the removed elements.