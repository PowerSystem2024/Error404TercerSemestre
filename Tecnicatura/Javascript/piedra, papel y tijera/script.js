// Variables para controlar el juego
let puntajeJugador = 0;
let puntajeComputadora = 0;
const elementoPuntajeJugador = document.getElementById("puntaje-jugador");
const elementoPuntajeComputadora = document.getElementById(
  "puntaje-computadora"
);
const textoResultado = document.getElementById("texto-resultado");
const seleccionJugador = document.getElementById("seleccion-jugador");
const seleccionComputadora = document.getElementById("seleccion-computadora");
const opciones = document.querySelectorAll(".opcion");
const botonReinicio = document.getElementById("boton-reinicio");

// Opciones del juego
const opcionesJuego = ["piedra", "papel", "tijera"];

// Inicializar el juego
function inicializar() {
  // Asignar eventos de click a las opciones
  opciones.forEach((opcion) => {
    opcion.addEventListener("click", function () {
      const eleccionJugador = this.id;
      jugar(eleccionJugador);
    });
  });

  // Asignar evento al botón de reinicio
  botonReinicio.addEventListener("click", reiniciarJuego);
}

// Función principal del juego
function jugar(eleccionJugador) {
  // Obtener elección de la computadora
  const eleccionComputadora = obtenerEleccionComputadora();

  // Mostrar las selecciones
  mostrarSelecciones(eleccionJugador, eleccionComputadora);

  // Determinar el ganador
  const ganador = determinarGanador(eleccionJugador, eleccionComputadora);

  // Actualizar puntuación y mostrar resultado
  actualizarPuntaje(ganador);

  // Mostrar mensaje con el resultado
  mostrarResultado(ganador, eleccionJugador, eleccionComputadora);
}

// Obtener la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opcionesJuego[indiceAleatorio];
}

// Mostrar las selecciones en pantalla
function mostrarSelecciones(eleccionJugador, eleccionComputadora) {
  // Mostrar la selección del jugador
  seleccionJugador.innerHTML = `<img src="images/${obtenerNombreImagen(
    eleccionJugador
  )}" alt="${eleccionJugador}">`;

  // Mostrar la selección de la computadora
  seleccionComputadora.innerHTML = `<img src="images/${obtenerNombreImagen(
    eleccionComputadora
  )}" alt="${eleccionComputadora}">`;
}

// Obtener el nombre de la imagen según la elección
function obtenerNombreImagen(eleccion) {
  switch (eleccion) {
    case "piedra":
      return "piedra.png";
    case "papel":
      return "papel.png";
    case "tijera":
      return "tijera.png";
    default:
      return "";
  }
}

// Determinar el ganador
function determinarGanador(eleccionJugador, eleccionComputadora) {
  if (eleccionJugador === eleccionComputadora) {
    return "empate";
  }

  if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "tijera" && eleccionComputadora === "papel")
  ) {
    return "jugador";
  }

  return "computadora";
}

// Actualizar la puntuación
function actualizarPuntaje(ganador) {
  if (ganador === "jugador") {
    puntajeJugador++;
    elementoPuntajeJugador.textContent = puntajeJugador;
  } else if (ganador === "computadora") {
    puntajeComputadora++;
    elementoPuntajeComputadora.textContent = puntajeComputadora;
  }
}

// Mostrar el resultado
function mostrarResultado(ganador, eleccionJugador, eleccionComputadora) {
  switch (ganador) {
    case "jugador":
      textoResultado.textContent = `¡Ganaste! ${capitalizarPrimeraLetra(
        eleccionJugador
      )} gana a ${eleccionComputadora}.`;
      textoResultado.style.color = "green";
      break;
    case "computadora":
      textoResultado.textContent = `¡Perdiste! ${capitalizarPrimeraLetra(
        eleccionComputadora
      )} gana a ${eleccionJugador}.`;
      textoResultado.style.color = "red";
      break;
    case "empate":
      textoResultado.textContent = `¡Empate! Ambos eligieron ${eleccionJugador}.`;
      textoResultado.style.color = "#333";
      break;
  }
}

// Función para capitalizar la primera letra
function capitalizarPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Reiniciar el juego
function reiniciarJuego() {
  puntajeJugador = 0;
  puntajeComputadora = 0;
  elementoPuntajeJugador.textContent = "0";
  elementoPuntajeComputadora.textContent = "0";
  textoResultado.textContent = "¡Haz tu selección!";
  textoResultado.style.color = "#333";
  seleccionJugador.innerHTML = "";
  seleccionComputadora.innerHTML = "";
}

// Iniciar el juego cuando se carga la página
window.addEventListener("DOMContentLoaded", inicializar);
