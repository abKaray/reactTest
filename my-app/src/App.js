import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
//
class Second extends Component {
    constructor(props) {
        super(props);
        this.state = "Sasha"
    }
  render() {
    return (
        <div>Hello world, <h1 className={"App-header"}>{this.state}</h1></div>
    );
  }
}

export default Second;
