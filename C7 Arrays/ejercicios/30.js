function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = {};
  
  for (let i = 0; i < numeros.length; i++) {
    // Si el elemento ya ha sido visto, es el primer elemento repetido
    if (elementosVistos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      // Marca el elemento actual como visto
      elementosVistos[numeros[i]] = true;
    }
  }
  
  // Si no se encontró ningún elemento repetido
  return undefined;
}

module.exports = encontrarElementoRepetido;