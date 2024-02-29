import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.allAnimals,
        });
      });
  }, []);

  function handleInputName(event) {
    setZoo({ ...zoo, zooName: event.target.value });
  }

  function handleSpecies(event) {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...data,
          animals:
            data.animals.filter((animal) => animal.specie === event) || [],
        });
      });
  }

  function handleAllSpecies() {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.allAnimals,
        });
      });
  }

  return (
    <div>
      <label htmlFor="">Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputName} />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}
