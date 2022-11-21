import React, { Component } from "react";

class Intro extends Component {
    constructor({ name, age, course }) {
        super();
        this.state = {
            name,
            // name:name
            age,
            course
        }
    }

  render() {
    return (
      <div>
        <h2>
          {this.state.name}-{this.state.age}-{this.state.course}
        </h2>
      </div>
    );
  }
}

export default Intro;
