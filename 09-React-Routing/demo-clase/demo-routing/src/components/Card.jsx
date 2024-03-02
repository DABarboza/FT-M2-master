import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div>
      <hr />
      <p>{props.id}</p>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <hr />
    </div>
  );
};

export default Card;
