import { ethers } from "hardhat";

async function main() {
  const cellboard = await ethers.getContractAt(
    "IColors",
    "0x04f1A5b9BD82a5020C49975ceAd160E98d8B77Af"
  );

  await cellboard.setColors();

  const number = await cellboard.getColor(4, 3);

  console.log(Number(number));
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

  


