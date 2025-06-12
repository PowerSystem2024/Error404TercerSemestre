let ataqueJugador
let ataqueEnemigo

// Iniciar el juego cuando se carge la página //
window.addEventListener('load', iniciarJuego)

// Funcíón para iniciar juego //
function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)

    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
        
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
    
     // Event listeners para abrir y cerrar el modal de reglas //
    let botonReglas = document.getElementById('boton-reglas');
    botonReglas.addEventListener('click', mostrarReglas);

    let cerrarReglasBtn = document.getElementById('cerrar-reglas');
    cerrarReglasBtn.addEventListener('click', cerrarReglas);

    // Se cierra el modal al presionar click fuera del apartado //
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-reglas');
        if(event.target === modal){
            cerrarReglas();
        }
    });
}

// Función para ver el apartado de  reglas //
function mostrarReglas() {
    const modal = document.getElementById('modal-reglas');
    modal.style.display = 'flex';
}

// Función para cerrar el apartado de reglas //
function cerrarReglas() {
    const modal = document.getElementById('modal-reglas');
    modal.style.display = 'none';
}

// Función para que el usuario seleccione personaje //
function seleccionarPersonajeJugador() {
    let personajeSeleccionado = "";
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (document.getElementById('zuko').checked) {
        personajeSeleccionado = "Zuko";
    } else if (document.getElementById('katara').checked) {
        personajeSeleccionado = "Katara";
    } else if (document.getElementById('aang').checked) {
        personajeSeleccionado = "Aang";
    } else if (document.getElementById('toph').checked) {
        personajeSeleccionado = "Toph";
    } else {
        alert("Por favor, selecciona un personaje");
        return;
    }

    spanPersonajeJugador.innerHTML = personajeSeleccionado;
    alert("Has seleccionado a " + personajeSeleccionado);

    seleccionarPersonajeEnemigo();
}

// Función para que la maquina seleccione un personaje aleatoriamente //
function seleccionarPersonajeEnemigo() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const numeroAleatorio = Math.floor(Math.random() * personajes.length);
    const personajeEnemigo = personajes[numeroAleatorio];

    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = personajeEnemigo;
    alert("El enemigo a seleccionado a " +personajeEnemigo);
}

// Función para  que el usuario seleccione un ataque //
function ataquePunio(){
    ataqueJugador = 'Puño'
    ataqueAleatorioEnemigo()
}

function ataquePatada(){
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}

function ataqueBarrida(){
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

// Función para que la maquina seleccione un ataque //
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio === 1){
        ataqueEnemigo = 'Puño'
    } else if(ataqueAleatorio === 2){
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }

    combate()
}

// Función para compara el ataque del jugador y del enemigo, y mostrar el resultado //
function combate(){
    let resultado = ""

    if(ataqueEnemigo === ataqueJugador){
        resultado = "EMPATE"
    } else if(ataqueJugador === 'Puño' && ataqueEnemigo === 'Barrida'){
        resultado = "GANASTE"
    } else if(ataqueJugador === 'Patada' && ataqueEnemigo === 'Puño'){
        resultado = "GANASTE"
    } else if(ataqueJugador === 'Barrida' && ataqueEnemigo === 'Patada'){
        resultado = "GANASTE"
    } else {
        resultado = "PERDISTE"
    }

    crearMensaje(resultado)
}

//Función para mostrar por detalle el combate //
function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = `Tu personaje atacó con <strong>${ataqueJugador}</strong>, el personaje del enemigo atacó con <strong>${ataqueEnemigo}</strong> → <strong>${resultado}</strong>`
    sectionMensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}