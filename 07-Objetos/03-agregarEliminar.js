let persona = {
   nombre: "Juan",
   apellido: "Salazar",
   edad: 11,
   email: "juan.eulufi.sa@gmail.com",
 };

// Agregar propiedad en objeto
persona.telefono = '132131'
console.log(persona)

// Eliminar propiedad del objeto
delete persona.apellido
console.log(persona)

// Array
let personaArray = Object.values(persona)
console.log(personaArray)

// String
let personaString = JSON.stringify(persona)
console.log(personaString)