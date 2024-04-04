function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let iguales = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      iguales = false;
      break;
    }
  }
  return iguales;
}

module.exports = todosIguales;
