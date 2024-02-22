import "./Cards.css";
const Cards = () => {
  const tituloStyle = {
    color: "blue",
    fontSize: "large",
  };
  return (
    <div className="container">
      <h1 style={tituloStyle}>Estas son las CARDS</h1>
      <p>Texto 1</p>
    </div>
  );
};

export default Cards;
