import React from "react";

const withLoading = (Component) => {
  return class NewComponent extends React.Component {
    state = {
      loading: false,
    };

    componentDidMount() {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 5000);
    }

    render() {
      return <Component loading={this.state.loading} />;
    }
  };
};

export default withLoading;
