import React from "react";
import Web3 from "web3";

import Lottery from "../contracts_abi/Lottery.json";
import TruffleContract from "truffle-contract";

const ProviderSetter = props => {
  if (window.ethereum) {
    const ethereum = window.ethereum;
    const web3Provider = new Web3(ethereum);

    // Use this only when executing actions (transaction)
    ethereum.enable().then(account => {
      const defaultAccount = account[0];
      web3Provider.eth.defaultAccount = defaultAccount;
      console.log("Default account: " + account);

      const LotteryContract = TruffleContract(Lottery);
      LotteryContract.setProvider(web3Provider.currentProvider);
      LotteryContract.defaults({ from: web3Provider.eth.defaultAccount });

      LotteryContract.deployed().then((lotteryContract) => {
          let price = 100000000000000000;
          lotteryContract.bet();
      });

    });

    /* make web3Provider available to your entire app now */
  } else {
    // provider not available: inform user that metamask is needed
    console.log("Provider not available!");
  }

  return <div>Provider may be set or not.</div>;
};

export default ProviderSetter;
