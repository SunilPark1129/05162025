import React, { Component } from "react";
import withCounter from "../../hoc/withCounter";

class CarModel extends Component {
  render() {
    return (
      <div className="container">
        <h3>Car Model Counter</h3>
        <div className="flex">
          {Object.entries(this.props.models).map(([key, value]) => {
            return (
              <div key={key} className="models">
                <div>
                  <button onClick={() => this.props.handleMinus(key)}>-</button>
                  <div>{key}</div>
                  <button onClick={() => this.props.handlePlus(key)}>+</button>
                </div>
                <p>clicked: {value}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withCounter(CarModel);
