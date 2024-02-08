// const arr1 = [1, 2, 3];

// const arr2 = [4, "Jorge", 6];

// const nuevoArr = [...arr1];

// arr1.push(5);

// console.log(nuevoArr);

// const arrConcatenado = [...arr1, ...arr2];

// console.log(arrConcatenado);

const persona = {
  nombre: "Jorge",
  edad: 20,
};

const personaConApellido = {
  ...persona,
  apellido: "Vega",
  edad: 23,
};

console.log(personaConApellido);
