const TAMANIO = 8;

const movimientosCaballo = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function armarTablero() {
  const tablero = new Array(TAMANIO).fill(null).map(() =>
    new Array(TAMANIO).fill(-1)
  );
  return tablero;
}

function sePuedeMover(x, y, tablero) {
  return (x >= 0 && x < TAMANIO && y >= 0 && y < TAMANIO && tablero[x][y] === -1);
}

function recorrerConCaballo(x, y, movimientosHechos, tablero) {
  if (movimientosHechos === TAMANIO * TAMANIO) {
    return true; 
  }

  for (let i = 0; i < movimientosCaballo.length; i++) {
    const [dx, dy] = movimientosCaballo[i];
    const nuevoX = x + dx;
    const nuevoY = y + dy;

    if (sePuedeMover(nuevoX, nuevoY, tablero)) {
      tablero[nuevoX][nuevoY] = movimientosHechos;

      if (recorrerConCaballo(nuevoX, nuevoY, movimientosHechos + 1, tablero)) {
        return true; 
      }

      tablero[nuevoX][nuevoY] = -1; 
    }
  }

  return false; 
}


function arrancarRecorrido() {
  const tablero = armarTablero();
  const inicioX = 0;
  const inicioY = 0;

  tablero[inicioX][inicioY] = 0; 

  if (recorrerConCaballo(inicioX, inicioY, 1, tablero)) {
    console.log("¡Lo hicimos! El caballo recorrió todo el tablero.");
    mostrarTablero(tablero);
  } else {
    console.log("No pudimos encontrar una solución desde esa posición.");
  }
}



function mostrarTablero(tablero) {
  for (let i = 0; i < TAMANIO; i++) {
    let fila = '';
    for (let j = 0; j < TAMANIO; j++) {
      fila += tablero[i][j].toString().padStart(2, '0') + ' ';
    }
    console.log(fila);
  }
}


arrancarRecorrido();
