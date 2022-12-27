const personaUno = {
  nombre: "Juan",
  apellido: "Salazar",
  edad: 20,
};

function cambiarValorObjeto(persona) {
  persona.nombre = "Minimo";
  persona.edad = 10;
}

cambiarValorObjeto(personaUno);

console.log(personaUno);
