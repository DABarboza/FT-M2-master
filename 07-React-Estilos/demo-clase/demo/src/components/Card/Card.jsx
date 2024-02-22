import "./Card.css";
const Card = () => {
  const tituloStyle = {
      color: "red",
      fontSize:"medium"
  };
  return (
    <div className="container">
      <h1 style={tituloStyle}>Esta es una CARD</h1>
    </div>
  );
};

export default Card;
