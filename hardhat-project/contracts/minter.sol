pragma solidity ^ 0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";

contract minter is ERC721,Ownable{
    string public baseuri;
    bool public presalestarted = false;
    uint256 public maxpresalecap = 0;


    constructor(string memory _baseuri)ERC721("ECTOKEN","EC"){
        baseuri = _baseuri;

    }

function setmaxpresalecap(uint2566 _maxpresalecap)public onlyOwner{
    maxpresalecap = _maxpresalecap;
}

function startpresale()public onlyOwner{
    presalestarted = true;
}


function presalemint() public payable{
    require(presalestarted==true,"presale not ongoing");
    _safemint

}




    }

