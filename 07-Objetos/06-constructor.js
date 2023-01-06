// function constructor de objeto de tipo persona
function Persona (nombre, apellido, email){
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function() {
    return this.nombre + " " + this.apellido
  }
}

let padre = new Persona ('Juan', 'Eulufi', 'juan.elufi@gmail.com');
padre.apellido = "Salazar"
console.log(padre);
console.log(padre.nombreCompleto());


// Persona.prototype.email = 'test@tes.com' // cambia a todos los objetos el valor