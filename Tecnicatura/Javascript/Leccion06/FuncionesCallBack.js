function miFuncion1() {
  console.log("Funcion 1");
}
function miFuncion2() {
  console.log("Funcion 2");
}

//Funcion de tipo callback
let imp = function imprimir(mensaje) {
  console.log(mensaje);
};

function sumar(op1, op2, funcioncallback) {
  let res = op1 + op2;
  //Llamamos a la funcion callback
  funcioncallback(`El resultado de la suma es: ${res}`);
}

sumar(5, 3, imp);

// Llamadas asincrionas con uso setTimeout
function miFuncionCallback() {
  console.log("Saludos asincrino despues de 3 segundos");
}
setTimeout(miFuncionCallback, 3000);

setTimeout(function () {
  console.log("Saludos asincrono 2");
}, 3000);

setTimeout(() => {
  console.log("Saludos asincrono 3");
}, 4000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

setInterval(reloj, 1000); 
// Cada 1 segundo se ejecuta