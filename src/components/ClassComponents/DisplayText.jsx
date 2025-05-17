import React from "react";
import withLoading from "../../hoc/withLoading";

class DisplayText extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Loading</h3>
        {this.props.loading ? (
          <div>Loading for 5 seconds...</div>
        ) : (
          <div>This text shows up after loading is complete</div>
        )}
      </div>
    );
  }
}

export default withLoading(DisplayText);
