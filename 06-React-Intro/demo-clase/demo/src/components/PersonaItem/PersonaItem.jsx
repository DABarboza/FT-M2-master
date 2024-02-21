import React from "react";

class PersonaItem extends React.Component {
  constructor(props) {
    //Constructor de la clase que hereda//
    super(props);
  }
  render() {
    return (
      <div>
        <hr></hr>
        <p>Nombre: {this.props.name}</p>
        <p>Edad: {this.props.age}</p>
        <hr></hr>
      </div>
    );
  }
}
// const PersonaItem = (props) => {
//   return (
//     <div>
//       <hr></hr>
//       <p>Nombre: {props.name}</p>
//       <p>Edad: {props.age}</p>
//       <hr></hr>
//     </div>
//   );
// };

export default PersonaItem;
