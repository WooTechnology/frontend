import React, { Component } from "react";
import Header from "./Header";
import About from './About';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default LandingPage;
