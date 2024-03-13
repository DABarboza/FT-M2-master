import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/actions";
const Cards = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  console.log(state);

  useEffect(() => {
    dispatch(getAllUsers);
  }, []);

  return (
    <div>
      <h1>Holiiis</h1>
    </div>
  );
};

export default Cards;
