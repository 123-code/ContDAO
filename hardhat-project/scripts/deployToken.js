const hre = require('hardhat');

async function main() {
    const NFTContfract = await hre.ethers.getContractFactory("NFTMarketplace");
    const nftcontract = await NFTContfract.deploy();
  
    await nftcontract.deployed();
  
    console.log(
      `contract deployed to ${nftcontract.address}`
    );
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  