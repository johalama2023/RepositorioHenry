function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arrayTablaDelSeis = [];
  for (let i = 0; i <= 10; i++) {
    arrayTablaDelSeis.push(i * 6);
  }
  return arrayTablaDelSeis;
}

module.exports = tablaDelSeis;
