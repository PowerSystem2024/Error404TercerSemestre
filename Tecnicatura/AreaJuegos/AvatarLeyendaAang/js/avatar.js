let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio') 
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
}

function seleccionarPersonajeJugador(){
  let inputZuko = document.getElementById('zuko')
  let inputKatara = document.getElementById('katara')
  let inputAang = document.getElementById('aang')
  let inputToph = document.getElementById('toph')

  let spanPersonajeJugador = document.getElementById('personaje-jugador')

  if(inputZuko.checked){
      spanPersonajeJugador.innerHTML = 'Zuko'
      alert('SELECCIONASTE TU PERSONAJE: ZUKO')
  } else if(inputKatara.checked){
      spanPersonajeJugador.innerHTML = 'Katara'
      alert('SELECCIONASTE TU PERSONAJE: KATARA')
  } else if(inputAang.checked){
      spanPersonajeJugador.innerHTML = 'Aang'
      alert('SELECCIONASTE TU PERSONAJE: AANG')
  } else if(inputToph.checked){
      spanPersonajeJugador.innerHTML = 'Toph'
      alert('SELECCIONASTE TU PERSONAJE: TOPH')
  } else {
      alert('Selecciona un personaje')
      return
  }
  
  seleccionarPersonajeEnemigo();
}


function seleccionarPersonajeEnemigo() {
  let personajes = ['Zuko', 'Katara', 'Aang', 'Toph'];
  let indiceAleatorio = Math.floor(Math.random() * personajes.length);

  let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
  let personajeEnemigo = personajes[indiceAleatorio];
  spanPersonajeEnemigo.innerHTML = personajeEnemigo;

  alert(`LA PC HA ELEGIDO EL PERSONAJE: ${personajeEnemigo.toUpperCase()}`);
}


function ataquePunio(){ 
    ataqueJugador = 'Punio'
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

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }

    mostrarAtaques();
}

function mostrarAtaques() {
    const mensajes = document.querySelector('#mensajes p');
    mensajes.innerHTML += `<br>Tu personaje lanzó ${ataqueJugador} y el enemigo lanzó ${ataqueEnemigo}.`;
}

window.addEventListener('load', iniciarJuego)
