pragma solidity ^ 0.8.0;

contract Tokens{
   uint Maxsupply = 10000000;
    uint minmint = 1;
    uint minburn = 1;

mapping(address => uint) public balanceOf;

function Mint(uint num)public{
    
    require(num > 0);
    require(num >= minmint);
    require(num < Maxsupply);
    balanceOf[msg.sender] += num;

}
}