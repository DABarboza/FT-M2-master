//! COMPONENTE FUNCIONAL

import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem";

const ListaPersonas = () => {
  return (
    <div>
      <PersonaItem name="Jorge Vega" age="23" />
      <PersonaItem name="Pedro Casillas" age="28" />
      <PersonaItem name="Michelle Margan" age={30} />
      {/* las llaves denotan que es javascript al html */}
    </div>
  );
};

export default ListaPersonas;
