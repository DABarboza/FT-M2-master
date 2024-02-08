// function Persona(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
// }

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre() {
    return this.nombre;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, cargo) {
    super(nombre, apellido); // => llamé al constructor de persona
    this.cargo = cargo;
  }
}

const empleado1 = new Empleado("Pedro", "Casillas", "Jefe de Ventas");
console.log(empleado1.getNombre());

//*
