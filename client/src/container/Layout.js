import React, { Component } from "react";
import Navbar from "./Navbar";

class Layout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-4">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
