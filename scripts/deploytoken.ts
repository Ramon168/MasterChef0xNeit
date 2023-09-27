import { ethers } from "hardhat";

async function main() {
 
 console.log("Deploying SobaToken");

  const sobaToken = await ethers.deployContract("contracts/SobaToken.sol:SobaToken", [], {
  });

  await sobaToken.waitForDeployment();

  console.log("Deployed SobaToken at : " + sobaToken.target);



await hre.run("verify:verify", {
  address: sobaToken.target,
  constructorArguments: [],
  contract: "contracts/SobaToken.sol:SobaToken"
});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
