let a = 3;
let b = 2;
let c = "3";

let z = a == c;
console.log(z) // true
let x = a == b;
console.log(x) // false

// Estricto
let y = a === c; 
console.log(y) // false

// Distinto varlor
z = a !== b;
console.log(z); // true

x = a != c;
console.log(x); // false

x = a !== c;
console.log(x); // true