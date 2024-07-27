'use strict'
   const score = 23

   const balance = new Number(100)
// console.log(balance)

//  console.log(balance.toString()) // Converts to strings
//  console.log(balance.toString().length) // 3 ,retuns the length of string
//  console.log(balance.toString().toFixed(2)) // 100.00 ,adds fixed number after number

   const otherNumber = 23.8999
// console.log(otherNumber.toPrecision(2)) // 24, rounds up the value from the given number

   const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // 10,000,000 , adds comas inbetween according to us standards, to make numbers more readable
// console.log(hundreds.toLocaleString('en-IN'));// 1,00,00,000, adds comas according to indian standards

// max-min value

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // 4, Gives the absolutre value i.e negative to positive
// console.log(Math.round(4.6)) // 5 ,would round up the value if above.5 then higher number else lower number
// console.log(Math.ceil(4.2)) // 5 ,would always round up the higher number
// console.log(Math.floor(4.9)) // 4 , would always round up the lower number
// console.log(Math.min(12,45,78,45)) // 12, gives the minimum no. from the set of given numbers.
// console.log(Math.max(12,45,78,45)) // 78, gives the maximum no. from the set of given numbers.

// console.log((Math.random()*10)+1) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1) + min))
