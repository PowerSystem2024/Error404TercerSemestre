class Empleado {
  constructor(nombre, sueldo) {}
  obtenerDetalles() {
    return `Empleado: ${this.nombre}, 
        Sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }
  // Agregamos la sobreeescritura
  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()},
        Depto: ${this.departamento}`;
  }
}

function imprimir(tipo) {
  console.log(tipo.obtenerDetalles()); // Segun el tipo de que le pasemos, sera la informacion

  if (tipo instanceof Gerente) {
    console.log("Es un objeto de tipo Gerente");
    console.log(tipo._departamento);
  } else if (tipo instanceof Empleado) {
    console.log("Es un objeto de tipo Empleado");
    console.log(tipo._departamento); // no existe en la clase padre
  } else if (tipo instanceof Object) {
    // El orden siempre es jerarquico
    console.log("Es un objeto de tipo Object"); // Clase padre de todas las clases
  }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Objeto de la clase hija

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); //Objeto de la clase padre

imprimir(gerente1);
imprimir(empleado1);
