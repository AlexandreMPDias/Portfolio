import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div>{this.props.history.location.pathname}</div>;
  }
}

export default Home;
