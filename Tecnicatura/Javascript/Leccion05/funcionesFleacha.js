function miFuncion() {
  console.log("Saludos desde mi funcion");
}

miFuncion();

let myFuncion = function () {
  console.log("Saludos desde mi funcion anonima");
};

//Ahora vamos a crear una funcion flecha
let miFuncionFlecha = () => {
  console.log("Saludos desde mi funcion flecha");
};
// Hay mas variantes de funciones flecha que vamos a ir viendo
miFuncionFlecha();

// lo hacemos en una linea
const saludar = () => console.log("Saludos desde esta funcion flecha");

saludar();

//otro ejemplo
const saludar2 = () => {
  return "Saludos desde esta funcion flecha dos";
};
console.log(saludar2);

//Simplificamos la funcion anterior
const saludar3 = () => "Saludos desde esta funcion flecha tres";
console.log(saludar3);

//Continuamos con otro ejemplo
const regresarObjeto = () => ({
  nombre: "Juan",
  apellido: "Lara",
});
console.log(regresarObjeto());

//Funciones que reciben parametros
const funcionParametros = (mensaje) => {
  console.log(mensaje);
};
funcionParametros("Saludos desde una funcion flecha con parametros");

// una funcion clasica
const funcionParamatrosClasica = function (mensaje) {
  console.log(mensaje);
};
funcionParamatrosClasica("Saludos desde una funcion clasica");

//Se pueden omitir los parentesis en la funcion flecha de la siguiente manera
const funcionSinParentesis = (mensaje) => {
  console.log(mensaje);
};
funcionSinParentesis("Otra forma de trabajar con funciones flecha");

//Ahora vemos funciones felcha con varios parametros
//Podemos abrir la funcion y tener mas cosas adentro de ella
const funcionConParametros2 = (op1, op2) => {
  let resultado = op1 + op2;
  return resultado;
};
console.log(funcionConParametros2(3, 5));
