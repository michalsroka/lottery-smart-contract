pragma solidity ^0.4.22;

contract Lottery {
    address public better;

    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    function bet()
        public
        payable
    {
        better = msg.sender;
    }

}