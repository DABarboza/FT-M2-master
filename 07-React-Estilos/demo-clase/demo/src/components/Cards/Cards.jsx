// import "./Cards.module.css";
import styled from "styled-components";
const Cards = () => {
  return (
    <div className="container">
      {/* <h1 style={tituloStyle}>Estas son las CARDS</h1> */}
      <h1 className={styled.titulo}>Estas son las CARDS</h1>
      <p>Texto 1</p>
    </div>
  );
};

export default Cards;
