import { ethers } from "hardhat";

async function main() {
 
  let sobaToken= "0x7a57Ce4805eeaeDcBD4291c4Fd52c83Df85D0370";
    console.log("Deploying SyrupBar...");

  const syrup = await ethers.deployContract("contracts/SyrupBar.sol:SyrupBar", [sobaToken], {
  });

  await syrup.waitForDeployment();

  console.log("Deployed Syrup At : " + syrup.target);


await hre.run("verify:verify", {
  address: syrup.target,
  constructorArguments: [sobaToken],
  contract: "contracts/SyrupBar.sol:SyrupBar"
});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
