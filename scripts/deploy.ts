import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";

async function main() {
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  const simpleToken = await SimpleToken.deploy();

  await simpleToken.deployed();

  console.log("Contrato deployado en la address: ", simpleToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
