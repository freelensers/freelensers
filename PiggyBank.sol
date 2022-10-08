// Piggy bank smart contract to store Ether and other ERC20 tokens
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (utils/math/SafeMath.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PiggyBank is Ownable {
    using SafeMath for uint256;
    mapping(address => uint256) public tokenBalances;
    mapping(address => uint256) public etherBalances;

    function depositEther() public payable {
        etherBalances[msg.sender] = etherBalances[msg.sender].add(msg.value);
    }

    function withdraw(uint256 amount, address payable recipient)
        public
        onlyOwner
    {
        require(etherBalances[msg.sender] >= amount, "Insufficient balance");
        etherBalances[msg.sender] = etherBalances[msg.sender].sub(amount);
        recipient.transfer(amount);
    }

    function depositToken(address token, uint256 amount) public {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        tokenBalances[token] += amount;
    }

    function withdrawToken(
        address token,
        uint256 amount,
        address recipient
    ) public onlyOwner {
        require(amount <= tokenBalances[token], "Insufficient balance");
        IERC20(token).transfer(recipient, amount);
        tokenBalances[token] -= amount;
    }
}
