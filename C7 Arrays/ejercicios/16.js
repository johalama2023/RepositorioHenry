function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrayMultiplicado = [];
  for (let i = 0; i < array.length; i++) {
    arrayMultiplicado.push(array[i] * i);
  }
  return arrayMultiplicado;
}

module.exports = multiplicarElementosPorIndice;
