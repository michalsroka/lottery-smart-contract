import React, { Component } from "react";
import ProviderSetter from "../components/ProviderSetter";
import BettingPanel from "../components/BettingPanel";
import { Navbar, Nav, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Web3 from "web3";
import Lottery from "../contracts_abi/Lottery.json";
import TruffleContract from "truffle-contract";
import "../css/home-page.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value0: 0,
      value1: null,
      value2: null,
      value3: null,
      value4: null
    };
    this.bet = this.bet.bind(this);
    this.areBettedNumbersValid = this.areBettedNumbersValid.bind(this);
  }

  handleChange(event, componentName) {
    this.setState({ [componentName]: event.target.value });
  }

  areBettedNumbersValid() {
    return ((this.state.value0 !== null && this.state.value1 !== null && this.state.value2 !== null && this.state.value3 !== null && this.state.value4 !== null) &&
     (1 <= this.state.value0 <= 49 && 1 <= this.state.value1 <= 49 && 1 <= this.state.value2 <= 49 && 1 <= this.state.value3 <= 49 && 1 <= this.state.value4 <= 49));
  }

  bet() {
    if (this.areBettedNumbersValid() && window.ethereum) {
      const ethereum = window.ethereum;
      const web3Provider = new Web3(ethereum);

      // Use this only when executing actions (transaction)
      ethereum.enable().then(account => {
        const defaultAccount = account[0];
        web3Provider.eth.defaultAccount = defaultAccount;
        const lotteryContract = TruffleContract(Lottery);
        lotteryContract.setProvider(web3Provider.currentProvider);
        lotteryContract.defaults({ from: web3Provider.eth.defaultAccount });

        lotteryContract.deployed().then(lotteryContract => {
          const price = 100000000000000000;
          lotteryContract.bet("1,11,19,24,43", {
            from: defaultAccount,
            value: price
          });
        });
      });
    } else {
      if (!this.areBettedNumbersValid()) {
        console.log("Provided numbers are not valid")
      } else {
        console.log("Provider not available!");
      }
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="main">
        <MyNavbar />
        <BettingPanel
          onClickBet={this.bet}
          handleChange={(event, componentName) => this.handleChange(event, componentName)}
          name0="value0"
          name1="value1"
          name2="value2"
          name3="value3"
          name4="value4"
          value0={this.state.value0}
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          value4={this.state.value4}
        />
        {/* <ProviderSetter /> */}
      </div>
    );
  }
}

export default HomePage;
