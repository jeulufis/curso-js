let contador = 0;

for(contador; contador <= 5; contador++) {
   if(contador === 2) {
      console.log('Antes del continue');
      continue;   // Ir a la siguente iteracion
      console.log('Despuesdel continue')
   }
   console.log(contador)
}