
const hre = require("hardhat");

async function main() {

  const Apple = await hre.ethers.getContractFactory("Apple");
  const apple = await Apple.deploy();

  await apple.deployed();

  console.log(`Apple is deployed ${apple.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
