import {ethers} from 'hardhat'
 
async function main(){

    const color = await ethers.deployContract("Cell", []);
    
  await color.waitForDeployment();
    console.log(color.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

