let contador = 0;

for (contador ; contador <= 10; contador++) {
   if(contador === 7) {
      console.log(contador);
      break; // Parar el for
      console.log('Despues del break') // No ejecuta jamas
   }
   console.log("Fuera del scope")
}
console.log("Fuera del for")