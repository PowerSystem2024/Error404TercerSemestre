//Módulo para leer por consola los datos desde la entrada y salida
const readline = require("readline");

//Se crea la interfaz para leer input del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

 

//Función para solicitar el tamaño de tablero
function solicitarTamanoTablero() {
  rl.question("Ingresa el tamaño del tablero (mínimo 8): ", (respuesta) => {
    const N = parseInt(respuesta);
    if (isNaN(N) || N < 8) {
      console.log("Por favor, ingresa un número válido mayor o igual a 8.");
      return solicitarTamanoTablero();
    }
    resolverNReinas(N);
  });
}

//Función que resuelve el problema
function resolverNReinas(N) {
  const posiciones = Array(N).fill(-1);

  //Se verifica si una posición es segura para colocar una reina
  function esSeguro(fila, col) {
    for (let i = 0; i < fila; i++) {
      const otraCol = posiciones[i];
      if (
        otraCol === col || //Misma columna
        Math.abs(otraCol - col) === Math.abs(i - fila) //Misma diagonal
      ) return false;
    }
    return true;
  }

  //Función para imprimir el tablero en consola
  function imprimirTablero() {
    let encabezado = "   ";
    for (let i = 0; i < N; i++) encabezado += ` ${i} `;
    console.log("\nTablero actual:");
    console.log(encabezado);
    console.log("   " + "---".repeat(N));
    for (let fila = 0; fila < N; fila++) {
      let linea = ` ${fila} |`;
      for (let col = 0; col < N; col++) {
        linea += posiciones[fila] === col ? " R " : " . ";
      }
      console.log(linea);
    }
  }
  //Función para explorar soluciones, si encuentra algun problema retrocede
  function backtrack(fila) {
    if (fila === N) return true;
    for (let col = 0; col < N; col++) {
      if (esSeguro(fila, col)) {
        posiciones[fila] = col;
        console.log(`\n-- Colocando reina en fila ${fila}, columna ${col} ---`);
        imprimirTablero();

        if (backtrack(fila + 1)) return true;

        console.log(`\n-- Retrocediendo: quitando reina de fila ${fila}, columna ${col} ---`);
        posiciones[fila] = -1;
      }
    }
    return false;
  }

  console.log(`\n RESOLVIENDO PROBLEMA DE LAS ${N} REINAS...`);
  const inicio = Date.now();
  const exito = backtrack(0);
  const fin = Date.now();

  if (exito) {
    console.log("\n ¡SOLUCIÓN ENCONTRADA!");
    console.log(`Tiempo de ejecución: ${(fin - inicio) / 1000} segundos`);
    console.log("\n POSICIONES DE LAS REINAS:");
    posiciones.forEach((col, fila) => {
      console.log(`Reina ${fila}: fila ${fila}, columna ${col}`);
    });
  } else {
    console.log("No se encontró solución para este tamaño.");
  }

  rl.close();
}
//Se solicita el tamaño del tablero
solicitarTamanoTablero();
