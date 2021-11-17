pragma solidity ^ 0.8.1;
import "./Tokens.sol";
contract Marketplace is Tokens{

struct Profile{
    address Address;
    string Name;
    uint balance;
    uint age;
    uint Postings;
    
}
uint minted = 0;
mapping(address => string) Minted ;
mapping(address => uint) postCount;
mapping(address => string) usernames;
mapping(string => uint) total_upvotes;

string [] E_usernames;

function Post(string memory Name)public{

    Tokens.Mint(1);
    Minted[msg.sender] = Name;
    postCount[msg.sender]++;

}
function Upvote(string memory Name) public {
total_upvotes[Name] +=1;
}

function SetUserName(string memory UserName) public{
usernames [msg.sender] = UserName;
E_usernames.push(UserName);

uint i;

}




}

