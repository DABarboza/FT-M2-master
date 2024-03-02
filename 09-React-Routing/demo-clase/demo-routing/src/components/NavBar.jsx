import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <p>LANDING</p>
      </Link>
      <Link to="/home">
        <p>HOME</p>
      </Link>
      <Link to="/about">
        <p>ABOUT</p>
      </Link>
      <hr />
    </div>
  );
};

export default NavBar;
