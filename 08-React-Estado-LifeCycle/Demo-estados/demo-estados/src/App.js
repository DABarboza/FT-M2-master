import EstadosClase from "./Components/EstadosClase";
import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Cards users={users} />
    </div>
  );
}

export default App;
