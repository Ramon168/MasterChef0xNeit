import { ethers } from "hardhat";

async function main() {
 
  let youraddressforfee= "0x7a57Ce4805eeaeDcBD4291c4Fd52c83Df85D0370";
  console.log("Deploying SobaToken");

  const sobaToken = await ethers.deployContract("contracts/SobaToken.sol:SobaToken", [], {
  });

  await sobaToken.waitForDeployment();

  console.log("Deployed SobaToken at : " + sobaToken.target);


  console.log("Deploying SyrupBar...");

  const syrup = await ethers.deployContract("contracts/SyrupBar.sol:SyrupBar", [sobaToken.target], {
  });

  await syrup.waitForDeployment();

  console.log("Deployed Syrup At : " + syrup.target);


  console.log("Deploying masterchef...");

  const masterchef = await ethers.deployContract("contracts/MasterChef.sol:MasterChef", [sobaToken.target,syrup.target,youraddressforfee ,BigInt(Number(20000000000000000000)),BigInt(Number(2637610))], {
  });

  await masterchef.waitForDeployment();

  console.log("Deployed Masterchef at : " + masterchef.target);

await hre.run("verify:verify", {
  address: sobaToken.target,
  constructorArguments: [],
  contract: "contracts/SobaToken.sol:SobaToken"
});



await hre.run("verify:verify", {
  address: syrup.target,
  constructorArguments: [sobaToken.target],
  contract: "contracts/SyrupBar.sol:SyrupBar"
});


await hre.run("verify:verify", {
  address: masterchef.target,
  constructorArguments: [sobaToken.target,syrup.target,youraddressforfee,BigInt(Number(20000000000000000000)),BigInt(Number(2637610))],
  contract: "contracts/MasterChef.sol:MasterChef"
});



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
