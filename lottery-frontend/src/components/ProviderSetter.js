import React from "react";
import Web3 from "web3";

import HelloWorld from "../contracts/HelloWorld.json";
import MetaCoin from "../contracts/MetaCoin.json"
import TruffleContract from "truffle-contract";

const ProviderSetter = props => {
  if (window.ethereum) {
    const ethereum = window.ethereum;
    const web3Provider = new Web3(ethereum);

    // Use this only when executing actions (transaction)
    ethereum.enable().then(account => {
      const defaultAccount = account[0];
      web3Provider.eth.defaultAccount = defaultAccount;
      console.log("Default account: " + defaultAccount);

      const HelloWorldContract = TruffleContract(HelloWorld);
      HelloWorldContract.setProvider(web3Provider.currentProvider);
      HelloWorldContract.defaults({ from: web3Provider.eth.defaultAccount });

      HelloWorldContract.deployed().then(hwc => {
        console.log("Executing sayHello func in HWcontract...");
        console.log(hwc.sayHello());
      });

      const MetaCoinContract = TruffleContract(MetaCoin);
      MetaCoinContract.setProvider(web3Provider.currentProvider);
      MetaCoinContract.defaults({ from: web3Provider.eth.defaultAccount });

      MetaCoinContract.deployed().then((coinContract) => {
          const address = '0x7ef1643074f34d772ee759ba70b5f38271e49c1c';
          
          console.log(coinContract);
          coinContract.sendCoin(address, BigInt('100000000000000000'));
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
