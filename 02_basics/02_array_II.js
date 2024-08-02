const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// Outputs : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);
// Here we see arrays accept all types of datatypes including Arrays too.
// Outputs : [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const new_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const overall_Array = new_Array.flat(2)
// console.log(overall_Array);

// console.log(Array.isArray("Pratik"))
// console.log(Array.from("Pratik"))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4)); // Output : [ 100, 200, 300, 400 ]
console.log(Array.of(score1,score2,score3,score4,score1)); // Output : [ 100, 200, 300, 400, 100 ]
