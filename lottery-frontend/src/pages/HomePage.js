import React, { Component } from "react";
import ProviderSetter from "../components/ProviderSetter";
import BettingPanel from "../components/BettingPanel";
import { Navbar, Nav, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import "../css/home-page.css"

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <MyNavbar />
        <BettingPanel />
        {/* <ProviderSetter /> */}
      </div>
    );
  }
}

export default HomePage;
