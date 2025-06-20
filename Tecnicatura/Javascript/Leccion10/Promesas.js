let miPromesa = new Promise((resolve, reject) => {
  let expresion = true;
  if (expresion) {
    resolve("Resolvio correctamente");
  } else {
    reject("Se produjo un error");
  }
});

// miPromesa.then(
//   (valor) => console.log(valor),
//   (error) => console.log(error)
// );

// miPromesa
//   .then((valor) => console.log(valor))
//   .catch((error) => console.log(error));

let promesa = new Promise((resolve, reject) => {
  console.log("Inicio promesa");
  setTimeout(() => {
    resolve("Saludo desde la promesa, callback, funcion flecha y setTimeout");
  }, 3000);
  console.log("Final promesa");
});
// El llamado a la promesa utilizando setTimeout
// promesa.then((valor) => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
  return "Saludos con promesa y async";
}

// miFuncionConPromesa().then((valor) => console.log(valor));

//async/await
// async function funcionConPromosaYAwait() {
//   let miPromesa = new Promise((resolver) => {
//     resolver("Promesa con await");
//   });
//   console.log(await miPromesa);
// }

// funcionConPromosaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitYSetTimeout() {
  let miPromesa = new Promise((resolver) => {
    console.log("Inicio funcion");
    setTimeout(() => {
      resolver("Promesa con await y setTimeout");
    }, 3000);
    console.log("Final funcion");
  });
  console.log(await miPromesa);
}
funcionConPromesaAwaitYSetTimeout();
