import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  //maneja el ciclo de vida del componente, lo hace de distintas maneras, entonces vamos a ir viendolas parte por parte para no quedar locos

  //componentDidMount
  useEffect(() => {
    console.log(
      "En un escenario reañ, yo en este momento y desde esta funcion estaria haciendo un fetch de los datos del usuario id"
    );
  }, []);
  return (
    <div>
      <h2>ESTA seria la ficha del usuario Id {id}</h2>
    </div>
  );
};

export default Detail;
