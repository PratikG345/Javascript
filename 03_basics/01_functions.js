
function sayMyName() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");
}
function addTwoNumbers(number1,number2) {
    console.log(number1 + number2);
}
function subtractTwonumbers(number1,number2) {
    return number1 - number2
}
function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}
// sayMyName()

// -------------------------------Function declaration and call format--------------------
// function name(parameters) {
    
// }

// functions call
// Name of Function(arguements)

// addTwoNumbers(34,34)

const result = subtractTwonumbers(10,5)
// console.log(result);

console.log(loginUserMessage()) // Outputs : Sam just logged in


function calculateCartPrice(...num1){ // Rest operator
return num1
}
console.log(calculateCartPrice(200,400,500));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} amd Price is ${anyobject.price}`);
}

handleObject({
    username: "Pratik",
    price: 399
}) // Output : Username is Pratik amd Price is 399

// const Array = [200,400,500]

function returnSecondValue(Array1){
    return Array1[1]
}
// console.log(returnSecondValue(Array));
console.log(returnSecondValue(Array = [200,400,500]));

