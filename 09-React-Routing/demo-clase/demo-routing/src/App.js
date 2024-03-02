import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Detail from "./views/Detail";

//!Version 5

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      {/* La ruta localhost:3000 */}
      <Route exact path="/" component={Landing} />

      {/* La ruta localhost:3000/home */}
      <Route path="/home" component={Home} />

      <Route path="/about" component={About} />

      <Route path="/detail/:id" component={Detail} />
    </div>
  );
}

//!Version 6

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         {/* La ruta localhost:3000 */}
//         <Route path="/" element={Landing} />

//         {/* La ruta localhost:3000/home */}
//         <Route path="/home" element={Home} />

//         <Route path="/about" element={About} />

//         <Route path="/detail/:id" element={Detail} />
//       </Routes>
//     </div>
//   );
// }

export default App;
