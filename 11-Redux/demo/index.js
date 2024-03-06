const { createStore } = require("redux");

const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
const DISMINUIR_CONTADOR = "DISMINUIR_CONTADOR";
const CAMBIAR_NOMBRE = "CAMBIAR_NOMBRE";
const AGREGAR_NUMERO = "AGREGAR_NUMERO";

const initialState = {
  count: 0,
  nombre: "Daniel",
  numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUMENTAR_CONTADOR:
      return { ...state, count: state.count + 1 };
    case DISMINUIR_CONTADOR:
      return { ...state, count: state.count - 1 };

    case CAMBIAR_NOMBRE:
      return { ...state, nombre: action.payload };
    case AGREGAR_NUMERO:
      return { ...state, numero: [...state.numero, action.payload] };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

const print = () => console.log(store.getState());

store.subscribe(print);

const aumentarContador = () => {
  return {
    type: AUMENTAR_CONTADOR,
  };
};

store.dispatch(aumentarContador());

store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "DISMINUIR_CONTADOR" });
store.dispatch({ type: "CAMBIAR_NOMBRE", payload: "DIEGO" });
store.dispatch({ type: "AGREGAR_NUMERO", payload: 11 });
