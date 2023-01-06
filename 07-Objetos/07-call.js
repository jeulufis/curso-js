let persona1 = {
  nombre: "Juan",
  apellido: "Eulufi",
  nombreCompleto: function () {
    return this.nombre + this.apellido;
  },
};

let persona2 = {
  nombre: "Javi",
  apellido: "Salazar",
};

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2)); // call: llamar funcion en otro objeto
