// import "./Card.module.css";
import styled from "styled-components";
const Card = () => {
  console.log(styled);
  return (
    <div className={styled.container}>
      {/* <h1 style={tituloStyle}>Esta es una CARD</h1> */}
      <h1 className={styled.titulo}>Esto es una CARD</h1>
    </div>
  );
};

export default Card;
