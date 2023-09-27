require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
/** @type import('hardhat/config').HardhatUserConfig */
let privatekey="f0c3bbc718d9fd1b30ba6a0ac35094c2445f90c389d8986b898e47b12d1bd86b";
let apikey="470c31f876e54e86852b94e0e8ac7a46";

module.exports = {
solidity: {
version : "0.6.12", //replace your own solidity compiler version
 settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      evmVersion:"istanbul",
    },
},
networks: {
 opbnbtest: {
  url: "https://opbnb-testnet.nodereal.io/v1/470c31f876e54e86852b94e0e8ac7a46/", 
  chainId: 5611, // Replace with the correct chainId for the "opbnb" network
  accounts: [privatekey], // Add private keys or mnemonics of accounts to use 
  gasPrice: 20000000000,
 },
opbnb: {
  url: "https://opbnb-mainnet.nodereal.io/v1/470c31f876e54e86852b94e0e8ac7a46/", 
  chainId: 204, // Replace with the correct chainId for the "opbnb" network
  accounts: [privatekey], // Add private keys or mnemonics of accounts to use 
  gasPrice: 20000000000,
 },
},
etherscan: {
 apiKey: {
  opbnb: apikey,//replace your nodereal API key
  opbnbtest: apikey,  
},

customChains: [
 {
  network: "opbnbtest",
  chainId: 5611, // Replace with the correct chainId for the "opbnb" network
  urls: {
    apiURL:  "https://open-platform.nodereal.io/"+ apikey+ "/op-bnb-testnet/contract/",
    browserURL: "https://opbnbscan.com/",
  },
 },
{
  network: "opbnb",
  chainId: 204, // Replace with the correct chainId for the "opbnb" network
  urls: {
    apiURL:  "https://open-platform.nodereal.io/" +apikey+ "/op-bnb-mainnet/contract/",
    browserURL: "https://opbnbscan.com/",
  },
 },
],
},
};