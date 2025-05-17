import React from "react";

const withSum = (Component) => {
  return class NewComponent extends React.Component {
    state = {
      sums: [],
      total: 0,
    };
    addSums(value) {
      this.setState((prev) => ({ sums: [...prev.sums, value] }));
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.sums !== prevState.sums) {
        const t = this.state.sums.reduce((a, b) => a + b);
        this.setState({ total: t });
      }
    }

    render() {
      return <Component {...this.state} addSums={this.addSums.bind(this)} />;
    }
  };
};

export default withSum;
