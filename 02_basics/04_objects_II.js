// const tinderUser =  new Object()

const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Pratik",
            lastname: "Gaikwad"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);
// console.log(regularUser.fullname.userFullname.lastname);

// Combining Objects
const obj1 = {1: "a",2: "b"}
const obj6 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "e",6: "f"}
const obj0 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2,obj4)// here obj1 is the target,values of all 3 obj are stored in obj3 and obj1
// Here obj1 is target and all other 3 obj are source,obj3 is returned target
// console.log(obj3);
// console.log(obj1);
// console.log(obj3 === obj1);
// console.log("-------------------------");
const obj5 = Object.assign({},obj6,obj2,obj4)// here {} is the target, values of all 3 obj are stored in obj5 and {}
// // Here {} is target and all other 3 obj are source,obj5 is returned target 
// console.log(obj5);
// console.log(obj6);

// Another Way
const obj7 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
const obj8 = {...obj6, ...obj2, ...obj4}
// console.log(obj5);

const users = [
    {
        id: 1,
        email:  "h@gmail.com"
    },
    {
        id: 2,
        email:  "i@gmail.com"
    },
    {
        id: 3,
        email:  "j@gmail.com"
    }
]
console.log(users[1].email);
console.log(Object.keys(tinderUser)); // object.keys : gives the keys of a particular object
console.log(Object.values(tinderUser)); // object.values : gives the values of a particular object
console.log(Object.entries(tinderUser)); // object.entries : gives all keys and values of a particular object
// console.log(typeof(Object.keys(tinderUser)));
console.log(tinderUser.hasOwnProperty('Sammy')) // Vhecks whether an object has a following key

