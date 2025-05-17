import React, { createRef } from "react";
import withSum from "../../hoc/withSum";

class SumNumber extends React.Component {
  inputRef = createRef();
  handleAdd() {
    const { value } = this.inputRef.current;
    if (Number.isNaN(Number(value)) || value === "") return;
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
    this.props.addSums(Number(value));
  }
  render() {
    return (
      <div className="container">
        <h3>Add Numbers</h3>
        <div className="flex">
          <input type="text" ref={this.inputRef} className="input" />
          <button onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
        <div>
          {this.props.sums.join("+") || 0} = <b>{this.props.total}</b>
        </div>
      </div>
    );
  }
}

export default withSum(SumNumber);
