pragma solidity ^ 0.8.18;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract DAONFT is ERC721,Ownable{
    uint256 number_minted;
    uint256 contValue;
    uint256 goal;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

constructor(uint256 _number,uint256 _contValue) ERC721("DAOTOKEN","DTK"){
number_minted = _number;
contValue = _contValue;
    }

function getNumberToMint()public view returns(uint){
        return number_minted;
    }


    function GetContValue()public view returns(uint){
return contValue;
    }


function CalculateGoal()public returns(uint){
goal = number_minted * contValue;
return goal;
    }

    function mint(address _to)public payable{
 require(_tokenIdCounter.current() < number_minted, "Max token ids reached");
uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_to, tokenId);
    }

    receive() external payable{
        require(msg.value>=contValue,"invalid amount!");
         (bool sent,) = payable(address(this)).call{value:msg.value}("");
         require(sent,"Transaction failed");
         mint(msg.sender);

    }
}