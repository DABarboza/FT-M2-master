// Extraer informacion de objetos y arrays, y guardarlos en variables

// const obj = {
//   nombre: "Jorge",
//   apellido: "Huertas",
//   edad: 23,
//   direccion: "Calle Falsa 123",
//   cp: 3300,
//   mail: "mail@mail.com",
// };

// const cualquiera = ({ nombre, apellido, mail }) => {
//retorne una version mas corta de este objeto

//   return {
//     nombre,
//     apellido,
//     mail,
//   };
// };

// console.log(cualquiera(obj));

//! GENERALMENTE PARA => ARRAYS PEQUEÑOS DONDE TENGAMOS CERTEZA DE LO QUE HAY DENTRO

const arr = ["VALOR X", () => {}];

const [valor, funcion] = arr;

console.log(valor);

console.log(funcion);
