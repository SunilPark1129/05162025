import React from "react";

const withCounter = (Component) => {
  return class NewComponent extends React.Component {
    state = {
      tesla: 0,
      bmw: 0,
      kia: 0,
    };

    handlePlus(model) {
      this.setState({ [model]: this.state[model] + 1 });
    }

    handleMinus(model) {
      this.setState({ [model]: this.state[model] - 1 });
    }

    render() {
      return (
        <Component
          models={{ ...this.state }}
          handlePlus={this.handlePlus.bind(this)}
          handleMinus={this.handleMinus.bind(this)}
        />
      );
    }
  };
};

export default withCounter;
