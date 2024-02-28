import Cards from "./Components/Cards";
import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { name: "Daniel", email: "Bardanii7@gmail.com" },
  ]);

  return (
    <div className="App">
      <Cards users={users} />
    </div>
  );
}

export default App;
