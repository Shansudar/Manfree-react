import React, { Component } from "react";

class Intro extends Component {
  constructor({ name, age, course }) {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("working ");
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count + 1 })
          }>
          Click
        </button>
      </div>
    );
  }
}

export default Intro;
