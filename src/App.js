import React from 'react';
import './style.css';

class Cool extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  Increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  Decrement() {
    if (this.state.counter <= 0) {
      this.state.counter = 0;
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Counter App in Class Based Component</h1>
        <button onClick={this.Increment.bind(this)}>Increment</button>
        <p>{this.state.counter}</p>
        <button
          onClick={() => {
            this.Decrement();
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
export default Cool;
