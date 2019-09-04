pragma solidity ^0.4.22;

contract Lottery {
    address public better;
    string winningNumbers;

    struct Better {
        address betterAddress;
        string bettedNumbers;
    }

    Better[] betters;
    address[] winners;

    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    function bet(string _betNumbers)
        public
        condition(msg.value == (0.1 ether))
        payable
        returns(bool succeeded)
    {
        Better storage _currentBetter;
        _currentBetter.betterAddress = msg.sender;
        _currentBetter.bettedNumbers = _betNumbers;
        betters.push(_currentBetter);
        return true;
    }

    function drawWinningNumbers()
        public
    {
        winningNumbers = "1,24,43,11,19";
    }

    function getWinningNumbers()
        public
        view
        returns(string numbers)
    {
        numbers = winningNumbers;
        return numbers;
    }

}