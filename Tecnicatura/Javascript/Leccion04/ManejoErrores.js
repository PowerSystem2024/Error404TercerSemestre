"use strict";
// Veamos como evitar este error
try {
  x = 10; //Lo traemo com alt + flecha hacia arriba o hacia abajo
  miFuncion();
} catch (error) {
  //Catchamos el error
  console.log(error);
} finally {
  console.log("Termina la revision de errores");
}
// La ejecucion ahora continua...
console.log("Continuamos...");

let resultado = "Hola";
try {
  //y = 5;
  if (isNaN(resultado)) throw "No es un número";
  else if (resultado === "") throw "Es una cadena vacía";
  else if (resultado >= 0) throw "Es un número positivo";
  else if (resultado < 0) throw "Es un número negativo";
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Termina la revision de errores 2");
}
