import React, { Component } from "react";
// import { BrowserRouter, Route } from 'react-router-dom';
import Decrement from "./Decrement";
import Increment from "./Increment";
import Reset from "./Reset";
import Input from "./Input";
import Abacus from "./abacus.jpg";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  input = (number) => {
    let value = parseInt(number);
    this.setState({
      count: this.state.count + value,
    });
  };

  render() {
    return (
      <div className="App">
        <img id="img" src={Abacus} alt="abacus" />
        <div className="container">
          <h1>{this.state.count}</h1>
          <Input input={this.input} />
          <div className="buttons">
            <Increment increment={this.increment} />
            <Decrement decrement={this.decrement} />
            <Reset reset={this.reset} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
