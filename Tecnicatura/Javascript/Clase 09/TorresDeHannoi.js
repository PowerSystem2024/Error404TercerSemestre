// Variable para definir el número de discos
const numeroDeDiscos = 3;
// Variable para contar los movimientos y almacenar los pasos
let contadorMovimientos = 0;
let movimientos = [];
// Función recursiva para resolver las Torres de Hanoi
function torresDeHanoi(n, origen, destino, auxiliar) {
  // Caso base: si hay un solo disco, moverlo directamente
  if (n === 1) {
    contadorMovimientos++;
    movimientos.push(
      `Movimiento ${contadorMovimientos}: Mover disco 1 de Torre ${origen} a Torre ${destino}`
    );
    return;
  }
  // Mover n-1 discos de la torre origen a la torre auxiliar
  torresDeHanoi(n - 1, origen, auxiliar, destino);
  contadorMovimientos++;
  movimientos.push(
    `Movimiento ${contadorMovimientos}: Mover disco ${n} de Torre ${origen} a Torre ${destino}`
  );
  // Mover el disco n de la torre origen a la torre destino
  torresDeHanoi(n - 1, auxiliar, destino, origen);
}

// Ejecutar el algoritmo
torresDeHanoi(numeroDeDiscos, "A", "C", "B");

// Mostrar los movimientos
console.log(`Cantidad de discos: ${numeroDeDiscos}`);
// Mostrar los movimientos realizados usando funciones de flecha
console.log("Movimientos:\n" + movimientos.map((mov) => mov).join("\n"));
// Mostrar el total de movimientos realizados
console.log(`Total de movimientos realizados: ${contadorMovimientos}`);

console.log(
  `Cantidad de discos: ${numeroDeDiscos}\n` +
    "Movimientos:\n" +
    movimientos.map((mov) => mov).join("\n") +
    `\nTotal de movimientos realizados: ${contadorMovimientos}`
);
