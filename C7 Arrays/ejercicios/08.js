function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      // Verifica si el número dado está presente en el arreglo
      if (array[i] === num) {
        // Si lo encuentra, devuelve el índice en el que se encuentra
        return i;
      }
    }
    // Si no se encuentra, retorna -1
    return -1;
   
}

module.exports = encontrarElemento;
