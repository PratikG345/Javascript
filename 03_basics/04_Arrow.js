const user = {
    username: "Pratik",
    price: 999,
// this keyword gives the value in the current context.
    welcomeMessage: function() {
        console.log(`${user.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage() // Pratik, welcome to website
/*{
  username: 'Pratik',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/
user.username = "sam"
// user.welcomeMessage() // sam, welcome to website
/*{
    username: 'sam',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }*/
// console.log(this); // {}
// Global object in browser is Window 

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "Pratik"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Pratik"
    console.log(this);
    console.log(username);
}
// chai()
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// if you write a function in curly braces then return keyword is required
// if you write a function in parenthesis then  we don't require return

const addTwo = (num1,num2) => (num1 + num2) // implicit return 
console.log(addTwo(3,4));
