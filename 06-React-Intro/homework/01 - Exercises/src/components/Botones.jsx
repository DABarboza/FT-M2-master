import React from "react";

class botones extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => alert(props.alerts.m1)}>Modulo 1</button>
        <button onClick={() => alert(props.alerts.m2)}>Modulo 2</button>
      </div>
    );
  }
}

export default botones;
