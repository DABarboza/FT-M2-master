import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

class CardsClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Cards Class</h1>
        <div>
          {this.props.characters.map((character) => {
            return (
              <Card
                id={character.id}
                name={character.name}
                key={character.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, null)(CardsClass);
