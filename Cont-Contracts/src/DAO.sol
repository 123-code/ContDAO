// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.19;

interface INFT{
    function mint(address _to, uint256 _tokenId) external;
    function ownerOf(uint256 _tokenId) external view returns (address);
    function OwnerByID(uint256 _tokenId) external view returns (address);
    function numberofNFTs() external view returns (uint256);
}

contract ContDAO{

    uint256 postcounter;
    mapping(address=>bool) public hasposted;


    struct Post{
        address Creator;
        uint256 goal;
        uint256 currentfunded;
        string name;
        //address[] depositors;
    }

    Post[] DAOposts;

function setPost(uint256 _goal,string memory _name)public {
require(_goal > 1 ether,"Too low!");
require(hasposted[msg.sender]=false);
Post memory post = Post(msg.sender,_goal,0,_name);
DAOposts.push(post);
postcounter ++;
hasposted[msg.sender]=true;
}
}
