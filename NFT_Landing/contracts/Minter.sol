//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Minter is ERC721 {
using SafeMath for uint256;
 address public Owner;
 string public image;
 string public Name;
string public Symbol;

constructor() ERC721(Name,Symbol){

}

function mint(string memory uri)public payable {

}
 mapping(address=>string)public owners;

}