Run first  
```shell
npm install 
```
then open hardhat.config.ts and change key to your private key and 
then open scripts folder and then open deployall.ts and edit youraddressforfee to your own address and edit blockreward and startblock.
and then open your cmd and run
```shell
npx hardhat compile 
```
and then run this command to deploy all contract at once 
```shell
npx hardhat run scripts/deployall.ts  --network opbnb 
```
or if you want to deploy token only run
```shell
npx hardhat run scripts/deploytoken.ts  --network opbnb 
```
or if you want to deploy syrup only run this command but first go and edit scripts/deploysyrup.ts and replace sobatoken to your token address 
```shell
npx hardhat run scripts/deploysyrup.ts  --network opbnb 
```
or if you need to deploy masterchef only run but first go and edit scripts/deploymasterchef.ts and replace sobatoken, syrup, blockreward, start reward and your address for fee to your address.
```shell
npx hardhat run scripts/deploymasterchef.ts  --network opbnb 
```
and if you want it for testnet just change network to to --netowrk opbnbtestnet
