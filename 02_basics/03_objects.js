// Singleton
// object.create

// object literals
const Juser = {
    name: "Pratik",
    age: 21,
    location: "Nashik",
    email: "pratik@abc.co",
    isLoggedIn: true,
}

// How to access object elements
// console.log(Juser.email); // Wrong way
// console.log(Juser["email"]);
// THis way is correct because the key in object are treated as string and if the keys are enclosed in inverted commas so we cant access the elements using dot.



// Very Important Question
// Create a symbol and add it in object keys and show the output

const mySym = Symbol("Key1")

const User1 = {
    name: "Soham",
    age: 13,
    [mySym]: "Key1"
}
// console.log(User1[mySym]);
// console.log(typeof mySym);

// How to change values of an element in objects
User1.name = "Pratik"
// How to lock elements name in objects?
// Object.freeze(User1)
User1.name = "Atul"
User1.age = 51
// console.log(User1);

// User1.greeting = function(){
//     console.log("Hello User 1");
    
// }

User1.greeting = function(){
    console.log("Hello User 1");
    
}
User1.greeting2 = function(){
    console.log(`Hello , ${this.name}`);
    
}
console.log(User1.greeting());
console.log(User1.greeting2());
