pragma solidity ^0.4.24;

contract Lottery {
    address public creator;
    address public better;
    string public winningNumbers;
    uint256 bank;

    struct Better {
        address betterAddress;
        string bettedNumbers;
    }

    enum State { Initialized, Ongoing, Finished }
    State state;

    Better[] betters;
    address[] winners;

    function Lottery()
        public
        payable
    {
        creator = msg.sender;
        state = State.Ongoing;
    }

    modifier condition(bool _condition)
    {
        require(_condition);
        _;
    }

    modifier isCreator()
    {
        require(msg.sender == creator);
        _;
    }

    modifier isNotCreator()
    {
        require(msg.sender != creator);
        _;
    }

    modifier isInState(State _state)
    {
        require(state == _state);
        _;
    }

    function bet(string _betNumbers)
        public
        condition(msg.value == (0.1 ether))
        payable
        returns(bool)
    {
        Better storage _currentBetter;
        _currentBetter.betterAddress = msg.sender;
        _currentBetter.bettedNumbers = _betNumbers;
        betters.push(_currentBetter);
        bank = bank + msg.value;
        state = State.Ongoing;
        return true;
    }

    function drawWinningNumbers()
        public
        isCreator
    {
        winningNumbers = "1,11,19,24,43"; // numbers need to be sorted
    }

    function isWinner(Better better)
        internal
        returns (bool)
    {
        string memory bettedNumbers = better.bettedNumbers;
        return keccak256(bettedNumbers) == keccak256(winningNumbers);
    }

    function collectWinners()
        public
        isCreator
    {
        for (uint i=0; i<betters.length; i++)
        {
            if (isWinner(betters[uint(i)]))
            {
                winners.push(betters[uint(i)].betterAddress);
            }
        }
    }

    function payout()
        public
        payable
        isCreator
    {
        uint256 prize = calculatePrize();
        for (uint i=0; i<winners.length; i++)
        {
            winners[uint(i)].transfer(prize);
        }
        delete winners;
    }

    function calculatePrize()
        internal
        returns(uint256)
    {
        uint256 prizePool = bank * uint256(9) / uint256(10);
        return prizePool / uint256(winners.length);
    }

    // function isSenderAWinner()
    //     public
    //     returns (bool)
    // {

    // }

    function getWinningNumbers()
        public
        view
        returns(string memory)
    {
        return winningNumbers;
    }

    function getWinners()
        public
        view
        returns(address[] memory)
    {
        return winners;
    }

}