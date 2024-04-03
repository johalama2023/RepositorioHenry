function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Verifica si el número es primo.
  // Un número primo es aquel que solo es divisible por sí mismo y por 1.
  if (numero <= 1) {
    // Los números menores o iguales a 1 no son primos.
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Comprueba si el número es divisible por algún número entre 2 y su raíz cuadrada.
    if (numero % i === 0) {
      // Si es divisible, no es primo.
      return false;
    }
  }
  // Si el número no es divisible por ningún número entre 2 y su raíz cuadrada, es primo.
  return true;
  
}

module.exports = esNumeroPrimo;
