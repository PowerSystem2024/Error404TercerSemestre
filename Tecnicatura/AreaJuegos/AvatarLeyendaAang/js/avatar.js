let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

// Iniciar el juego  cuando se carge la página
window.addEventListener('load', iniciarJuego);

function iniciarJuego() {
    document.getElementById('boton-personaje').addEventListener('click', seleccionarPersonajeJugador);
    document.getElementById('boton-punio').addEventListener('click', ataquePunio);
    document.getElementById('boton-patada').addEventListener('click', ataquePatada);
    document.getElementById('boton-barrida').addEventListener('click', ataqueBarrida);
    document.getElementById('boton-reglas').addEventListener('click', mostrarReglas);
    document.getElementById('cerrar-reglas').addEventListener('click', cerrarReglas);
    
    // Botón reiniciar
    document.getElementById('btn-reiniciar').addEventListener('click', reiniciarJuego);

    // Ocultar ataques y reiniciar al inicio
    document.getElementById('seleccionar-ataque').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-reglas');
        if (event.target === modal) {
            cerrarReglas();
        }
    });
}

// Función para ver el apartado de reglas
function mostrarReglas() {
    document.getElementById('modal-reglas').style.display = 'flex';
}

function cerrarReglas() {
    document.getElementById('modal-reglas').style.display = 'none';
}

// Función para que el usuario seleccione un personaje
function seleccionarPersonajeJugador() {
    let personajeSeleccionado = "";
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (document.getElementById('zuko').checked) personajeSeleccionado = "Zuko";
    else if (document.getElementById('katara').checked) personajeSeleccionado = "Katara";
    else if (document.getElementById('aang').checked) personajeSeleccionado = "Aang";
    else if (document.getElementById('toph').checked) personajeSeleccionado = "Toph";
    else return alert("Por favor, selecciona un personaje");

    spanPersonajeJugador.innerHTML = personajeSeleccionado;
    alert("Has seleccionado a " + personajeSeleccionado);

    seleccionarPersonajeEnemigo();

    // Mostrar ataques y ocultar selección
    document.getElementById('seleccionar-ataque').style.display = 'block';
    document.getElementById('seleccionar-personaje').style.display = 'none';
}

// Función para que la maquina seleccione un personaje aleatoriamente
function seleccionarPersonajeEnemigo() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const personajeEnemigo = personajes[Math.floor(Math.random() * personajes.length)];
    document.getElementById('personaje-enemigo').innerHTML = personajeEnemigo;
    alert("El enemigo ha seleccionado a " + personajeEnemigo);
}


// Función para  que el usuario seleccione un ataque
function ataquePunio() {
    ataqueJugador = 'Punio';
    ataqueAleatorioEnemigo();
}

function ataquePatada() {
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
}

function ataqueBarrida() {
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
}

// Función para que la maquina seleccione un ataque
function ataqueAleatorioEnemigo() {
    let num = aleatorio(1, 3);
    ataqueEnemigo = num === 1 ? 'Punio' : num === 2 ? 'Patada' : 'Barrida';
    combate();
}

// Función para iniciar combate
function combate() {
    let resultado = "";
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueEnemigo === ataqueJugador) {
        resultado = "EMPATE";
    } else if (
        (ataqueJugador === 'Puño' && ataqueEnemigo === 'Barrida') ||
        (ataqueJugador === 'Patada' && ataqueEnemigo === 'Puño') ||
        (ataqueJugador === 'Barrida' && ataqueEnemigo === 'Patada')
    ) {
        resultado = 'GANASTE';
        vidasEnemigo = Math.max(vidasEnemigo - 1, 0);
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultado = 'PERDISTE';
        vidasJugador = Math.max(vidasJugador - 1, 0);
        spanVidasJugador.innerHTML = vidasJugador;
    }

    crearMensaje(resultado);
    revisarVidas();
}

// Función para revisar las vidas del usuario y enemigo
function revisarVidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal("🎉 FELICITACIONES!!! HAS GANADO");
        deshabilitarAtaques();
        document.getElementById('reiniciar').style.display = 'block';
    } else if (vidasJugador === 0) {
        crearMensajeFinal("😢 QUE PENA, HAS PERDIDO!!!");
        deshabilitarAtaques();
        document.getElementById('reiniciar').style.display = 'block';
    }
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu personaje atacó con ${ataqueJugador}, el personaje enemigo atacó con ${ataqueEnemigo} → <strong>${resultado}</strong>`;
    sectionMensaje.appendChild(parrafo);
}

function crearMensajeFinal(resultado) {
    let sectionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultado;
    sectionMensaje.appendChild(parrafo);
}

function deshabilitarAtaques() {
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;
}

function reiniciarJuego() {
    vidasJugador = 3;
    vidasEnemigo = 3;

    document.getElementById('vidas-jugador').innerHTML = vidasJugador;
    document.getElementById('vidas-enemigo').innerHTML = vidasEnemigo;

    document.getElementById('boton-punio').disabled = false;
    document.getElementById('boton-patada').disabled = false;
    document.getElementById('boton-barrida').disabled = false;

    document.getElementById('mensajes').innerHTML = "";
    document.getElementById('personaje-jugador').innerHTML = "";
    document.getElementById('personaje-enemigo').innerHTML = "";

    document.getElementById('zuko').checked = false;
    document.getElementById('katara').checked = false;
    document.getElementById('aang').checked = false;
    document.getElementById('toph').checked = false;

    document.getElementById('seleccionar-personaje').style.display = 'block';
    document.getElementById('seleccionar-ataque').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
