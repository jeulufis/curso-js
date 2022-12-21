// Ejemplos tipos de datos

// String
var nombre = "Juan";
console.log(typeof nombre);

// Number
var numero = 1;
console.log(typeof numero);

// Object
var objeto = {
  nombre: "Juan",
  apellido: "Eulufi",
  edad: 20,
};
console.log(typeof objeto);

// Boolean
var bandera = true;
console.log(typeof bandera);

// Function
function miFuncion() {
   console.log(typeof miFuncion)
}

// Symbol
var simbolo = Symbol("mi simbolo")
console.log(typeof simbolo)

// Class
class persona {
   constructor( nombre, apellido ) {
      this.nombre = nombre;
      this.apellido = apellido;
   }
}
console.log(typeof persona); // function

// Undefined
var x;
console.log(typeof x); // undefined

// Null
var y = null;
console.log(typeof y); // object

// Array
var autos = ['BMW, Audi', 'Volvo'];
console.log(typeof autos) // object

var z = ''
console.log(typeof z) // string 