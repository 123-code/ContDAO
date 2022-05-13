	pragma solidity ^ 0.8.4;
    import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

    contract Governance is ERC20Votes{
        uint public total_supply;

mapping(address=> uint) public govtokens;
mapping(address=>bool)public tminted;



    constructor() ERC20("Nature-Token","NTT") ERC20Permit("Governance"){
        /*
        Mint governance token to anyone who calls the function,
        must be an nft buyer.
        */
        _mint(msg.sender,1);
    }
modifier onetokent{
    require(tminted[msg.sender]==false,"You have already minted a token");
    _;
}

modifier onetoken{
    require(govtokens[msg.sender]<1 && govtokens[msg.sender]>0,"No se puede dar su token de governanza");
    _;
}

    function _aftertokentransfer(address from,
    address to,
    uint amount) internal override(ERC20Votes){
        super._aftertokentransfer(from,to,amount);
    }

function _mint(address _to,uint _amount) internal override(ERC20Votes){
    super._mint(_to,_amount);
}

function burn(address acc,uint _amount) internal override(ERC20Votes){
    super._burn(acc,_amount);
}


    }