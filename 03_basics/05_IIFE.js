// Immediately Invoked Function Expressions (IIFE)
// Sometimes Our Functions are polluted by Global scope and global variables so IIFE functions are used.


// IIFE syntax 
//  (function)()

(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB connected two ${name}`);
})('Pratik');