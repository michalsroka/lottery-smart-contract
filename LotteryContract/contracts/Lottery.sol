pragma solidity ^0.4.22;

contract Lottery {
    address public better;

    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    function bet()
        public
        condition(msg.value == (0.1 ether))
        payable
    {
        better = msg.sender;
    }

}