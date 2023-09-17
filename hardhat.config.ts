import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'
require ('dotenv').config()


const config: HardhatUserConfig = {  
  solidity: "0.8.19",
     networks: {
      sepolia: {
        url:process.env.SEPOLIARPC,
        // @ts-ignore
        accounts:[process.env.PRIVATEKEY]
      },
        hardhat: {
          forking: {
            url: "https://eth-mainnet.g.alchemy.com/v2/3q6CEpCdu4oynK2kiXZPQnql3kBSrM1d",
          }
        }
      },
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
      },
}

export default config;