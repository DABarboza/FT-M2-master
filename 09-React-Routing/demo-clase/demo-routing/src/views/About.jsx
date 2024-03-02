import AboutText from "../components/AboutText";
import { useLocation } from "react-router-dom";
const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>ESTA ES LA VISTA DE ABOUT</h1>
      <h3>Aca se te viene un par de parrafos</h3>
      <AboutText></AboutText>
    </div>
  );
};

export default About;
