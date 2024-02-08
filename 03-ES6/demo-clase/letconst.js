//* Var => Tienen alcance de CONTEXTO DE EJECUCION
//* Let => Tienen alcance de LLAVES

const { log } = require("@11ty/eleventy/src/EleventyErrorHandler");

// {
//   var variableConVar = "VariableConVar";
//   let variableConLet = "VariableConLet";
//   const variableConConst = "VariableConConst";
//   {
//     console.log(variableConConst);
//   }
// }

// console.log(variableConVar);

// console.log(variableConLet);

// const miVariable = "Jorge";
// miVariable = "Lucas";

// const miArr = [];
// miArr.push(5);

// console.log(miArr);

// let nombre = "Jorge";

// nombre = 5;
//******************************************************/

//! TODO ES ***CONST*** HASTA QUE SE DEMUESTRA LO CONTRARIO => SINO SERA LET

function devuelvePares(arr) {
  const pares = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      pares.push(num);
    }
  }
  return pares;
}
console.log(devuelvePares([1, 2, 3, 4, 5, 6]));
