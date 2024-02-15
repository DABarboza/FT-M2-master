// solo requiero las que voy a usar no todas
// const obj = require(`./funciones`);
const { suma } = require(`./funciones`);
const { num1, num2 } = require(`./variables`);

// const resultado = obj.suma(4, 5);
const resultado = suma(num1, num2);

console.log(resultado);
