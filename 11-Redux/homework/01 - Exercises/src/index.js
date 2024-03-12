const { createStore } = require("redux");
const reducer = require("./reducer");
const {
  incremento,
  decremento,
  incrementoImpar,
  incrementoAsync,
} = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(reducer);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const contador = store.getState().contador;
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = contador;
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const botonIncremento = document.getElementById("incremento");
const botonDecremento = document.getElementById("decremento");
const botonIncrementoImpar = document.getElementById("incrementoImpar");
const botonIncrementoAsync = document.getElementById("incrementoAsync");

botonIncremento.addEventListener("click", () => {
  store.dispatch(incremento());
});
botonDecremento.addEventListener("click", () => {
  store.dispatch(decremento());
});
botonIncrementoImpar.addEventListener("click", () => {
  store.dispatch(incrementoImpar());
});
botonIncrementoAsync.addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(incrementoAsync());
  }, 5000);
});
