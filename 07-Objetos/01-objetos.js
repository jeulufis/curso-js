// Crear objeto llamada persona con clave / valor

let persona = {
  nombre: "Juan",
  apellido: "Salazar",
  edad: 11,
  email: "juan.eulufi.sa@gmail.com",
};

console.log(persona.nombre);
console.log(persona.apellido);

// Agregar metodos a objetos

let personaObject = {
  nombre: "Nico",
  apellido: "Perez",
  nombreCompleto: function () {
    return "Mi nombre es " + this.nombre + " " + this.apellido;
  },
};

console.log(personaObject.nombreCompleto());

// Crear un nuevo objeto

let persona2 = new Object();
persona2.nombre = "Pepito";
persona2.apellido = "Flufy";
console.log(persona2);
