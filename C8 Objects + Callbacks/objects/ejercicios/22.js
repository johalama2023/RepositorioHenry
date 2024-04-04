function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   if (str1.length !== str2.length) {
      return false; // No pueden ser anagramas si tienen longitudes diferentes
  }

  // Paso 2: Convertir ambas cadenas a minúsculas y eliminar espacios
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // Paso 3: Ordenar los caracteres de ambas cadenas y compararlas
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  // Comparar las cadenas ordenadas
  return sortedStr1 === sortedStr2;
}

module.exports = esAnagrama;
