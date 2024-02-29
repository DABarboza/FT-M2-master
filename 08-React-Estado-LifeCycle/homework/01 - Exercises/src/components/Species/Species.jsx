import React from "react";
import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  return (
    <div className={styledSpecies.container}>
      <h2>Species</h2>
      {species.map((specie) => (
        <button
          className={styledSpecies.button}
          key={specie}
          value={specie}
          onClick={() => handleSpecies(specie)}>
          {specie}
        </button>
      ))}
      <button className={styledSpecies.button} onClick={handleAllSpecies}>
        All Animals
      </button>
    </div>
  );
}
