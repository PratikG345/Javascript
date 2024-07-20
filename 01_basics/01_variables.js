"use strict"
const accountId =  1444553
let accountEmail = "pratik678@fmail.com"
var accountPassword = "12345" 
/*Prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Jaipur"
let accountState = false;

// accountId = 2 //not allowed
accountEmail = "hc123@fmail.com"
accountPassword = "67890"
accountCity = "Mumbai"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountId);
// console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
