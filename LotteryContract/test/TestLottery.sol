pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Lottery.sol";

contract TestLottery {

    function testInitialState() {
        Lottery lottery = new Lottery();
        
        string memory expectedState = 'Ongoing';
        string memory result = lottery.getState();

        Assert.equal(result, expectedState,"Initial state expected to be Ongoing");
    }

}