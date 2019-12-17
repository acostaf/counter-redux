import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, reset } from "../actions";

class Counter extends PureComponent {
  render() {
    return (
      <div style={{ marginLeft: 30 }}>
        <h1> Counter </h1>
        <h1> {this.props.counter} </h1>
        <button onClick={() => this.props.increment(1)}> Increase </button>
        <button onClick={() => this.props.decrement(-1)}> Decrease </button>
        <button onClick={() => this.props.reset(0)}> Reset </button>
      </div>
    );
  }
}

export default connect(
  state => ({ counter: state.counter }),
  dispatch => bindActionCreators({ increment, decrement, reset }, dispatch)
)(Counter);
