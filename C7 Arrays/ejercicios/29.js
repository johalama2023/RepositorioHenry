function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  let mayor = numeros[0];
  let menor = numeros[0];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
    suma += numeros[i];
  }
  let sumaTotal = 0;
  for (let i = menor; i <= mayor; i++) {
    sumaTotal += i;
  }
  if (sumaTotal === suma) {
    return null;
  }
  return sumaTotal - suma;
  
}

module.exports = encontrarNumeroFaltante;