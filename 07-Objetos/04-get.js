let personaObject = {
  nombre: "Nico",
  apellido: "Perez",
  get nombreCompleto() {
    // metodo get
    return "Mi nombre es " + this.nombre + " " + this.apellido;
  },
};

console.log(personaObject.nombreCompleto);
