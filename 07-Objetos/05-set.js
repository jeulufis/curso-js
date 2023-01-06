let personaObject = {
  nombre: "Nico",
  apellido: "Perez",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    // metodo get
    return "Mi nombre es " + this.nombre + " " + this.apellido;
  },
};


console.log(personaObject.lang)
personaObject.lang = "en"
console.log(personaObject.idioma)