function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
   // Obtener la fecha actual
   var fechaActual = new Date();
  
   // Obtener el año actual
   var añoActual = fechaActual.getFullYear();
   
   // Obtener el año de nacimiento de la fecha de nacimiento
   var añoNacimiento = fechaNacimiento.getFullYear();
   
   // Calcular la edad restando el año actual al año de nacimiento
   var edad = añoActual - añoNacimiento;
   
   // Verificar si la persona es mayor de edad (18 años o más)
   if (edad >= 18) {
     return true;
   } else {
     return false;
   }
}

module.exports = esMayorDeEdad;