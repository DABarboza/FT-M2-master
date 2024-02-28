import React from "react";

class EstadosClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Daniel",
    };
  }
  render() {
    const aumentar = () => {
      //Aumentar el contador
      this.setState({ count: this.state.count + 1 }, () => {
        console.log(this.state.count);
      });
    };

    const disminuir = () => {
      //Disminuir el contador
      this.state.count > 0 && this.setState({ count: this.state.count - 1 });
    };

    return (
      <>
        <h1>Contador con estados (clase)</h1>
        <h3>{this.state.count}</h3>
        <button onClick={disminuir}>-</button>
        <button onClick={aumentar}>+</button>
      </>
    );
  }
  componentDidMount() {
    console.log("El componente se ha montado correctamente");
  }
  componentDidUpdate() {
    console.log("El componente se ha actualizado");
  }
  componentWillUnmount() {
    console.log("El componente se va a desmontar");
  }
}

export default EstadosClase;
