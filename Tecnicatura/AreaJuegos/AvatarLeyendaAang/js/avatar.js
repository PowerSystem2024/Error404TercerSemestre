// Seleccionamos los elementos del DOM
const btnPersonajeJugador = document.getElementById("btn-personaje");
// const btnFuego = document.getElementById("btn-fuego");
// const btnAgua = document.getElementById("btn-agua");
// const btnTierra = document.getElementById("btn-tierra");
// const btnAire = document.getElementById("btn-aire");
// const btnReiniciar = document.getElementById("btn-reiniciar");

// Agregamos el evento al botón una vez cargado el DOM
document.addEventListener("DOMContentLoaded", function () {
  btnPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
});

// Función para elegir aleatoriamente el personaje del enemigo
function aleatoria() {
  const personajes = ["Zuko", "Katara", "Toph", "Aang"];
  const indiceAleatorio = Math.floor(Math.random() * personajes.length);
  return personajes[indiceAleatorio];
}

// Función para seleccionar el personaje del jugador
function seleccionarPersonajeJugador() {
  const personajes = document.getElementsByName("personaje");
  let personajeSeleccionado = null;

  // Buscar cuál personaje fue marcado
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].checked) {
      personajeSeleccionado = personajes[i];
      break;
    }
  }

  // Si se eligió un personaje
  if (personajeSeleccionado) {
    const nombreJugador = personajeSeleccionado.labels[0].innerText;
    const nombreEnemigo = aleatoria();

    // Mostrar alertas
    alert(`SELECCIONASTE TU PERSONAJE: ${nombreJugador.toUpperCase()}`);
    alert(`LA PC HA ELEGIDO EL PERSONAJE: ${nombreEnemigo.toUpperCase()}`);

    // Actualizar nombres en la sección de ataque
    document.getElementById("personaje-jugador").innerText = nombreJugador;
    document.getElementById("personaje-enemigo").innerText = nombreEnemigo;
  } else {
    alert("No has seleccionado ningún personaje.");
  }
}
