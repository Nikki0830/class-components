// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";


export default class App extends Component {
  c = "nikki";
  render() {
    return (
      <div>
        <Navbar />
        <News />
        {/*<h1>Hello my first class based component {this.c}</h1>*/}
      </div>
    );
  }
}
