import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <h1>BIENVENIDOS A LA DEMO DE REACT ROUTING</h1>;
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        suscipit ad non. Consectetur, enim saepe. Nam ex, recusandae repellat
        doloribus, quae debitis maxime unde quisquam et perspiciatis amet
        reprehenderit nemo!
      </p>
      <button onClick={() => history.push("/home")}>INGRESAR</button>
    </>
  );
};

export default Landing;
