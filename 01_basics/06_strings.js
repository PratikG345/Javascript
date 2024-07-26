const name = "Pratik"
let repoCount = 10

//console.log(name + repoCount + " Value");  // old System of string concatination, outdated

//console.log(`Hello My name is ${name} and my repo count is ${repoCount}`) // modern method

const myName = new String('Pratik')
const fullName = new String('PratikGaikwad')

console.log(myName[0]) // P
console.log(myName.length); // 6
// Gives the length of the string

console.log(myName.toUpperCase()); // PRATIK 
// converts string to Upper case

console.log(myName.toLowerCase()); // pratik 
// converts string to Lower case

console.log(myName)

console.log(myName.charAt(4)) // we can know which character is located at aparticular index

console.log(myName.indexOf('t')) // we can know the index of a particular character

//Now we are going to slice the strings, whic hmeans to cut the strings
const newString = fullName.substring(0,6)
console.log(newString) // Pratik

const newStringss = fullName.substring(6,13)
console.log(newStringss) // Gaikwad


const names = "     Pratik     "
console.log(names)  // output : "    Pratik     "
console.log(names.trim()) // output : "Pratik"
//trim Function : It removes additional spaces 

const batman = "Hello_Batman"
console.log(batman.replace('_', ' ')) // Hello Batman // For single replace
// replace function replaces a particular characrter in the string by thr given character

const antman = "Hello_My_Name_is_Ant-Man"
console.log(antman.replace(/_/g, ' ')) // Hello My Name is Ant-Man // for multiple replace 
// /_/g is a regular expression that matches all underscores in the string (_) due to the global flag g.

console.log(antman.includes('My')) // true  //includes function checks if a string has a particular character or not
console.log(antman.includes('Batman')) //false

console.log(antman.split('_')) // [ 'Hello', 'My', 'Name', 'is', 'Ant-Man' ]
// split function splits the string on the basis of given character