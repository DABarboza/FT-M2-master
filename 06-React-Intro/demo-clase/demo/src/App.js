// import logo from "./logo.svg";
import "./App.css";
import ListaPersonas from "./components/ListaPersonas/ListaPersonas";

const listaPersonas = [
  { name: "Jorge Vega", age: "23" },
  { name: "Pedro Casillas", age: "28" },
  { name: "Michelle Margan", age: "30" },
  { name: "Luisa Vega", age: "25" },
];
function App() {
  return (
    <div className="App">
      {/* este componente muestra una lista de personas */}
      <ListaPersonas lista={listaPersonas} />
    </div>
  );
}

export default App;
