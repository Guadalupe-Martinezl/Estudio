let intensidad = (v, r) => {
 let resistencia = v/r;

  if (resistencia>100){
    const validacion =`El resultado ${resistencia} es mayor a 100`
    return validacion
  } else {
  const validacion =`El resultado ${resistencia} es menor a 50`
   return validacion
  }
}

console.log(intensidad(150,2));
