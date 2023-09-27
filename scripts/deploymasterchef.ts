import { ethers } from "hardhat";

async function main() {
 
  let youraddressforfee= "0x7a57Ce4805eeaeDcBD4291c4Fd52c83Df85D0370";
  let sobaToken= ""
  let syrup= ""
  let blockreward= BigInt(Number(rewardhere))
  let startblock= BigInt(Number(startblockhere))   
  console.log("Deploying masterchef...");

  const masterchef = await ethers.deployContract("contracts/MasterChef.sol:MasterChef", [sobaToken,syrup,youraddressforfee ,blockreward,startblock], {
  });

  await masterchef.waitForDeployment();

  console.log("Deployed Masterchef at : " + masterchef.target);


await hre.run("verify:verify", {
  address: masterchef.target,
  constructorArguments: [sobaToken,syrup,youraddressforfee ,blockreward,startblock],
  contract: "contracts/MasterChef.sol:MasterChef"
});



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
