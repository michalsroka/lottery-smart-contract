import React, { Component } from "react";
import ProviderSetter from "../components/ProviderSetter";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello Lottery!
        <ProviderSetter />
      </div>
    );
  }
}

export default HomePage;
