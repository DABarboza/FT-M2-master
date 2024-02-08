// function sumar(a, b) {
//   const resultado = a + b;
//   return resultado;
// }

//*************************************************** */

// const sumar = (a, b) => {
//   const resultado = a + b;
//   return resultado;
// };

// console.log(sumar(5, 8));

//*************************************************** */

// const sumar = (a, b) => {
//   return a + b;
// };

// const sumar = (a, b) => a + b;

//*************************************************** */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const pares = arr.filter(function (num) {
//   return num % 2 === 0;
// });

//! MEJOR???

// const pares = arr.filter((num) => {
//   return num % 2 === 0;
// });

//! MEJOR???

// const pares = arr.filter((num) => num % 2 === 0);

//************************************************* */

const bob = {
  nombre: "bob",
  amigos: ["Emanuel", "Ariel", "Diego"],

  printFriends() {
    this.amigos.forEach((friends) => {
      console.log(this.nombre, "conoce a", friends);
    });
  },
};

bob.printFriends();
